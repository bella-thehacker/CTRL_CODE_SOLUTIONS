import { Terminal, Monitor, Keyboard, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./Button";
import { Card, CardContent } from "./Card";

export default function Home() {
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
            >
              HOME_
            </Button>
            <Button
              variant="ghost"
              className="text-green-500 hover:text-green-400 terminal-btn"
            >
              ABOUT_
            </Button>
            <Button
              variant="ghost"
              className="text-green-500 hover:text-green-400 terminal-btn"
            >
              SERVICES_
            </Button>

            <Button
              variant="ghost"
              className="text-green-500 hover:text-green-400 terminal-btn"
            >
              PROJECTS_
            </Button>
            <Button
              variant="ghost"
              className="text-green-500 hover:text-green-400 terminal-btn"
            >
              CONTACT_
            </Button>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-green-400 terminal-text">
              &gt; INITIALIZING NEXT-GEN SOLUTIONS WITH RETRO SOUL_
            </p>
            <div className="vintage-computer-container">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Vintage Computer"
                className="mx-auto mb-8 vintage-effect"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight glow-text typewriter">
              CTRL_CODE SOLUTIONS
            </h1>
            <Button className="terminal-btn text-lg mt-8 border border-green-500 bg-transparent hover:bg-green-500/20">
              EXECUTE PROGRAM_
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">
            &gt; OUR_SERVICES
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black border-green-500/50 terminal-card">
              <CardContent className="p-6 space-y-4">
                <Terminal className="w-12 h-12 text-green-400" />
                <h3 className="text-xl font-bold glow-text">
                  CUSTOM_SOFTWARE
                </h3>
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

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">
            &gt; CONTACT_US
          </h2>
          <div className="max-w-xl mx-auto">
            <Card className="bg-black border-green-500/50 terminal-card">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-green-400" />
                    <p className="terminal-text">
                      &gt; 123 DIGITAL AVENUE, TECH CITY_
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-green-400" />
                    <p className="terminal-text">&gt; (555) 123-4567_</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-green-400" />
                    <p className="terminal-text">&gt; CONTACT@CTRLCODE.COM_</p>
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
