export function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-card/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Description */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I  am a passionate Full Stack Developer with expertise in building robust, scalable web applications. I combine technical excellence with creative problem-solving to deliver solutions that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I'm committed to staying at the forefront of web development trends and best practices.
            </p>
          </div>

          {/* Right side - Info Cards */}
          <div className="space-y-4">
            <div className="bg-background border border-border rounded-lg p-4">
              <p className="text-accent font-semibold text-sm mb-1">Location</p>
              <p className="text-foreground">Kenya</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-4">
              <p className="text-accent font-semibold text-sm mb-1">Email</p>
              <p className="text-foreground">ezraktoo09@gmail.com</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-4">
              <p className="text-accent font-semibold text-sm mb-1">Experience</p>
              <p className="text-foreground">2 Years in Web Development</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-4">
              <p className="text-accent font-semibold text-sm mb-1">Specialization</p>
              <p className="text-foreground">Full Stack Development (MERN)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
