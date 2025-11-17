import Navbar from "@/src/components/Navbar/Navbar";

// src/app/about/page.tsx
export default function About() {
  return (
    <>
    <Navbar />
        <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <h1>About Us</h1>
        <p>Learn more about Myrtle Solutions.</p>
      </div>
    </div>
    </>
    

  );
}