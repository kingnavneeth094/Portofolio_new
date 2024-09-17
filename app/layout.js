"use client";
import NavBar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className="h-full relative">
      <NavBar />
      <main className="flex-grow">{children}</main>
        
      </body>
    </html>
  );
}
