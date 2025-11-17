import Navbar from "@/src/components/Navbar/Navbar";

// src/app/get-started/page.tsx
export default function GetStarted() {
  return (
      <>
        <Navbar />
            <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1>Get Started</h1>
        <p>Begin your journey with Myrtle Solutions.</p>
      </div>
    </div>
        </>

  );
}