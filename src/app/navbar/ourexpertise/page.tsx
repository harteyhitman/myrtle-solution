import Navbar from "@/src/components/Navbar/Navbar";

// src/app/work/page.tsx
export default function Work() {
  return (
      <>
        <Navbar />
           <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1>Our Work</h1>
        <p>See our portfolio of successful projects.</p>
      </div>
    </div>
        </>
 
  );
}