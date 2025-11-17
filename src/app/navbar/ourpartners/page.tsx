import Navbar from "@/src/components/Navbar/Navbar";

// src/app/services/page.tsx
export default function Services() {
  return (
      <>
        <Navbar />
           <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1>Our Services</h1>
        <p>Professional services tailored to your needs.</p>
      </div>
    </div>
        </>
 
  );
}