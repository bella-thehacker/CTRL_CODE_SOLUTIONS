import React, { useRef } from "react";
import { Terminal, Monitor, Keyboard, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./components/Button";
import { Card, CardContent } from "./components/Card";
import VintageComputer from "./components/VintageComputer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Projects } from "./components/Projects";

import "./index.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none crt-overlay"></div>
      <div className="absolute inset-0 pointer-events-none scanline"></div>

      <header className="border-b border-green-500/30">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider glow-text">
            <span className="text-green-400">CTRL</span>
            <span className="text-green-600">_CODE</span>
          </div>
          <div className="space-x-4 hidden md:block">
            <Button
              variant="ghost"
              className="text-green-500 hover:text-green-400 terminal-btn"
              onClick={() => scrollToSection(homeRef)}
            >
              HOME_
            </Button>
            <Button
              variant="ghost"
              className="text-green-500 hover:text-green-400 terminal-btn"
              onClick={() => scrollToSection(aboutRef)}
            >
              ABOUT_
            </Button>
            <Button
              variant="ghost"
              className="text-green-500 hover:text-green-400 terminal-btn"
              onClick={() => scrollToSection(servicesRef)}
            >
              SERVICES_
            </Button>
            <Button
              variant="ghost"
              className="text-green-500 hover:text-green-400 terminal-btn"
              onClick={() => scrollToSection(projectsRef)}
            >
              PROJECTS_
            </Button>
            <Button
              variant="ghost"
              className="text-green-500 hover:text-green-400 terminal-btn"
              onClick={() => scrollToSection(contactRef)}
            >
              CONTACT_
            </Button>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section
          className="container mx-auto px-4 py-20 text-center"
          ref={homeRef}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight glow-text typewriter mt-10 mb-20">
            CTRL_CODE SOLUTIONS
          </h1>

          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="relative w-full h-[500px]">
            <Canvas camera={{ position: [0, 3, 10], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[5, 10, 10]} angle={0.15} penumbra={1} />
              
              <VintageComputer />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>

            {/* Text */}
            <div className="text-center md:text-left mg">
              <p className="text-xl text-green-400 terminal-text ml-30">
                &gt; INITIALIZING NEXT-GEN SOLUTIONS WITH{" "}
                <strong className="text-center ml-50">RETRO SOUL_</strong>
              </p>
            </div>
          </div>

          <p className="mt-20" ref={aboutRef}>
            <strong> CTRL_CODE SOLUTIONS,</strong> fuses cutting-edge technology
            with a
            <strong>
              {" "}
              <i> nostalgic retro vibe </i>
            </strong>{" "}
            to craft unique digital experiences. We specialize in custom
            software development, system optimization, and 24/7 tech support,
            all delivered with a vintage-inspired touch. Our approach combines
            innovation with a timeless aesthetic, turning modern challenges into
            seamless, efficient solutions. At CTRL_CODE, we code with
            creativity, passion, and a bit of retro soul — because technology
            should be as inspiring as it is functional.
          </p>

          <img src="/car.webp" alt="" className="retro-car" />
        </section>

        {/* Services Section */}
        <section
          ref={servicesRef}
          className="container mx-auto px-4 py-20 text-center"
        >
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">
            &gt; OUR_SERVICES
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black border-green-500/50 terminal-card">
              <CardContent className="p-6 space-y-4">
                <Terminal className="w-12 h-12 text-green-400" />
                <h3 className="text-xl font-bold glow-text">CUSTOM_SOFTWARE</h3>
                <p className="text-green-400 terminal-text">
                  &gt; Crafting bespoke digital solutions for modern challenges_
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black border-green-500/50 terminal-card">
              <CardContent className="p-6 space-y-4">
                <Monitor className="w-12 h-12 text-green-400" />
                <h3 className="text-xl font-bold glow-text">
                  SYSTEM_OPTIMIZATION
                </h3>
                <p className="text-green-400 terminal-text">
                  &gt; Maximizing performance through expert optimization_
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black border-green-500/50 terminal-card">
              <CardContent className="p-6 space-y-4">
                <Keyboard className="w-12 h-12 text-green-400" />
                <h3 className="text-xl font-bold glow-text">TECH_SUPPORT</h3>
                <p className="text-green-400 terminal-text">
                  &gt; 24/7 support for all your technical needs_
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section ref={projectsRef}>
          <h2 className="text-3xl font-bold text-center mb-20 glow-text">
            {" "}
            &gt; WE ARE PROUD OF OUR PROJECTS_
          </h2>
          <Projects />
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">
            &gt; CONTACT_US
          </h2>
          <div className="max-w-xl mx-auto">
            <Card className="bg-black border-green-500/50 terminal-card">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-green-400" />
                    <p className="terminal-text">&gt; Fully Remote</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-green-400" />
                    <p className="terminal-text">&gt; +(254) 712-0631-52_</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-green-400" />
                    <p className="terminal-text">
                      &gt; ctrlcodesolutions@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-500/30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <p className="text-sm text-green-400 terminal-text">
            &gt; © {new Date().getFullYear()} CTRL_CODE SOLUTIONS.
            ALL_RIGHTS_RESERVED_
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
