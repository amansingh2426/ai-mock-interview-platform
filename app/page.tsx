import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "./__components/Header";
import Hero from "./__components/Hero";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      <Hero />
    </div>
  );
}
