import { NextRequest, NextResponse } from "next/server";
import ImageKit from "imagekit";
import axios from "axios";
import { currentUser } from "@clerk/nextjs/server";
import { aj } from "@/utils/arcjet";

export const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_URL_PUBLIC_KEY ?? "",
  privateKey: process.env.IMAGEKIT_URL_PRIVATE_KEY ?? "",
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT ?? "",
});

export async function POST(req: NextRequest) {
  try {
    // env checks
    if (!process.env.IMAGEKIT_URL_PRIVATE_KEY || !process.env.IMAGEKIT_URL_PUBLIC_KEY || !process.env.IMAGEKIT_URL_ENDPOINT) {
      console.error("Missing ImageKit env vars", {
        hasPrivate: !!process.env.IMAGEKIT_URL_PRIVATE_KEY,
        hasPublic: !!process.env.IMAGEKIT_URL_PUBLIC_KEY,
        hasEndpoint: !!process.env.IMAGEKIT_URL_ENDPOINT,
      });
      return NextResponse.json({ error: "Server misconfigured: missing IMAGEKIT env vars" }, { status: 500 });
    }
    
    const user = await currentUser();
    const formData = await req.formData();
    console.log("Incoming formData keys:", [...formData.keys()]);

    const file = formData.get("file") as Blob | null;
    const jobTitle = formData.get('jobTitle') as File;
    const jobDescription = formData.get('jobDescription') as File;
    

    const decision = await aj.protect(req, {userId :user?.primaryEmailAddress?.emailAddress??'', requested: 5})
    console.log("Arcjet decision", decision);
     
    //@ts-ignore
    if(decision?.reason?.remaining==0)
    {
      return NextResponse.json({
        status:429,
        result:'No free credit remaining, try again after 24 hours'
      })
    }

    if (!file) {
      console.error("No file found in formData. Keys:", [...formData.keys()]);
      return NextResponse.json({ error: "No file found (expected form field 'file')" }, { status: 400 });
    }

    // read bytes
    const arrayBuffer = await file.arrayBuffer();

    // Buffer exists only in Node runtime. If you run on Edge runtime, this will throw.
    if (typeof Buffer === "undefined") {
      console.error("Buffer is not defined in this runtime. Are you running on Edge runtime?");
      return NextResponse.json({ error: "Server runtime does not support Buffer (Edge runtime?)" }, { status: 500 });
    }
    const buffer = Buffer.from(arrayBuffer);

    // Upload to ImageKit — wrap so we can log their response/error
    let uploadResponse: any;
    try {
      uploadResponse = await imagekit.upload({
        file: buffer,
        fileName: `upload-${Date.now()}.pdf`,
        isPrivateFile: false,
        useUniqueFileName: true,
      });
      console.log("ImageKit uploadResponse:", {
        status: uploadResponse?.status,
        url: uploadResponse?.url,
        fileId: uploadResponse?.fileId ?? uploadResponse?.id,
      });
    } catch (ikErr: any) {
      console.error("ImageKit upload failed:", ikErr);
      // If SDK gives useful body, include it
      return NextResponse.json({ error: "ImageKit upload failed", details: ikErr?.message ?? ikErr }, { status: 500 });
    }

    // Ensure uploadResponse.url exists
    if (!uploadResponse?.url) {
      console.error("ImageKit returned no URL", uploadResponse);
      return NextResponse.json({ error: "ImageKit upload did not return a url", raw: uploadResponse }, { status: 500 });
    }

    // Call n8n webhook (wrap axios in try/catch)
    try {
      // IMPORTANT: If this is deployed, make sure the webhook host is reachable (not localhost)
      const webhookUrl = process.env.N8N_WEBHOOK_URL ?? "http://localhost:5678/webhook/62cf1dbd-bfce-4d78-bdb2-f74bced8b856";
      console.log("Calling webhook:", webhookUrl);

      const result = await axios.post(
        webhookUrl,
        { resumeUrl: uploadResponse.url },
        { timeout: 30000 }
      );

      console.log("Webhook response status:", result.status, "data:", result.data);
      return NextResponse.json({ success: true, webhookData: result.data }, { status: 200 });
    } catch (axiosErr: any) {
      console.error("Axios webhook call failed:");
      if (axiosErr.response) {
        console.error("Axios response status:", axiosErr.response.status, "data:", axiosErr.response.data);
        return NextResponse.json({ error: "Webhook responded with non-2xx", status: axiosErr.response.status, data: axiosErr.response.data }, { status: 500 });
      } else if (axiosErr.request) {
        console.error("Axios request made but no response (network). request:", axiosErr.request);
        return NextResponse.json({ error: "No response from webhook (network)", request: "sent" }, { status: 500 });
      } else {
        console.error("Axios setup error:", axiosErr.message);
        return NextResponse.json({ error: "Axios error", message: axiosErr.message }, { status: 500 });
      }
    }
  } catch (error: any) {
    console.error("Unexpected handler error:", error);
    return NextResponse.json({ error: error?.message ?? "Unknown error", stack: error?.stack ?? null }, { status: 500 });
  }
}
