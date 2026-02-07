import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-accent">
          EZRA KIPKOECH
        </Link>
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="#home" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-accent transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-accent transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
