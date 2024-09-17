"use client";
import NavBar from "./components/Navbar";
import About from "./sections/AboutSection";
import Contact from "./sections/ContactSection";
import Home from "./sections/HomeSection";
import Project from "./sections/ProjectSection";

export default function HomePage() {
  return (
    <div className="bg-black">
      <NavBar/>
      <main>
      <Home/>       
      <About/>
      <Project/>
      <Contact/>
      </main>
    </div>
  );
}
