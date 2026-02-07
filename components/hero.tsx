import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-background"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-accent text-lg font-semibold mb-2">HELLO!</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              I'm{" "}
              <span className="text-accent">Ezra Kipkoech</span>
            </h1>
            <p className="text-2xl text-muted-foreground mt-2">Full Stack Developer</p>
          </div>

          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Crafting elegant digital experiences with modern technologies. Specialized in building scalable web applications with MongoDB, Express, React, and Node.js.
          </p>

          <div className="flex gap-4 pt-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              View My Work
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-1 bg-gradient-to-b from-accent/20 to-transparent rounded-lg blur opacity-75" />
            <div className="relative bg-card rounded-lg overflow-hidden">
              <Image
                src="/images/profile.jpeg"
                alt="Ezra Kipkoech"
                width={400}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
