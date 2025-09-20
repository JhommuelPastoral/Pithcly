import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-16 bg-white border border-b px-15 ">
        <Header />
      </header>
      <main className="h-[calc(100vh-64px)] mt-16 font-poppins">
        {children}
      </main>
      <footer className="h-screen" >
        <Footer />  
      </footer>
    </>

  );
}