import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import StarsCanvas from "./components/StarBackground";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container mt-24 px-12 py-4">
          <HeroSection />
          <AboutMe />
          <ProjectsSection />
          <EmailSection />
          <Footer />
        </div>
        
      </main>
  );
}
