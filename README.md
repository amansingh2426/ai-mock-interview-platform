// page.tsx is main in app directory
use shacn for ui library also for homepag ewe use libarcy foro header and hero section
here we use clerk authentication all steps given in docs---- so to use it in buuton tag use
<Link href={'/dashboard'}> 
  <Button>get started</Button>
</Link> --- thi swill redirect to dashbiard route


----we use DATABSE --convex open source  b/c it have feautures all---


-------------FULL  OVERWIEW------

1.  we have make this with next js
2. for componentss ui dashboard --we have not directly made we used SHADCN UILIBRARY for header and hero section-- aslo use button components in this we can use any component without mading manually

3. then for authentication we used CLERK AUTHENTICATION with applying all docs for sign in and sign out and we make local .env.local file for that to place enveroment variables also middleware.ts----then make seperate (AUTH)file in APP/component in order to apply filename with sign-in.tsx in which auto generate dfile is page.tsx..  thdn aplly in header we want
 

4. to save all the storage local we use CONVEX database --- we setup the database using it use npx create covex it will create automatic folder which includes schema.ts,api.ts   and we make users.ts to store users session aslo .env.local new for covex 
then make context folder in root section to apply all databases code and manage  then make provider.tsx in app section and apply in wrap i tto children.


------DASHBOARD LAYOUT----
1.create (routes ) in app section

layout.tsx is same work as app.jsx root layout of app

1. we make _components 9n app section in which make file name AppHrader.tsx



--N8N automation for job decription question from ai integration from open API ----

2. upload Resume on free clouds storage on Imagekit.io
3. now we create a new api folder in app section to save the resume api from imaagekit



----crate interview usign ARKJET-------FREEE