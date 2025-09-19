import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header className="h-16 items-center flex px-15 justify-between font-poppins border border-red-500">
        <Header />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />  
      </footer>
    </>

  );
}