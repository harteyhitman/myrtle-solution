import Navbar from "@/src/components/Navbar/Navbar";

// src/app/contact/page.tsx
export default function Contact() {
  return (
      <>
        <Navbar />
          <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1>Contact Us</h1>
        <p>Get in touch with our team.</p>
      </div>
    </div>
        </>
  
  );
}