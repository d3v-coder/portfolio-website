"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Rental houses management Platform",
    description: "The Deed Hostels Management System is a full-stack web application designed to streamline hostel operations. It features role-based access control, real-time updates, and comprehensive management tools for both administrators and tenants.",
    technologies: ["React 18", "Typescript", "Vite", "Convex(Database + Functions + Real-Time", "Vite"],
    liveLink: "https://precise-monitor-694.convex.app/",
    githubLink: "https://github.com/TooEzra/THE-DEED-HOSTELS",
  },
  {
    id: 2,
    title: "Matatu fleet Management App",
    description: "A comprehensive fleet management application built with React, Convex, and TailwindCSS for managing Public Service Vehicle (PSV) operations in Kenya.",
    technologies: ["React 18", "Typescript", "Tailwind", "Convex", "Vite" , "Sonner"],
    liveLink: "https://doting-hummingbird-324.convex.app/",
    githubLink: "https://github.com/TooEzra/Fleet-Mate",
  },
  {
    id: 3,
    title: "Green tech",
    description: "A modern, AI-powered sustainable agriculture dashboard designed to help smallholder farmers optimize crop yields, manage water resources, and make data-driven farming decisions.",
    technologies: ["Next.js 15", "Supabase", "Tailwind CSS", "Shadcn/ui"],
    liveLink: "https://v0-sustainable-agriculture-dashboar-seven.vercel.app/",
    githubLink: "https://github.com/TooEzra/green-tech",
  },
  {
    id: 4,
    title: "Kuza-Mart",
    description: "Kuza Mart is a comprehensive e-commerce platform designed specifically for the Kenyan agricultural market. It connects farmers directly with buyers, eliminating middlemen and ensuring fair prices for both parties.",
    technologies: ["React 19", "Typescript", "Vite", "React Router", "Sonner", "TailwindCSS","Mongodb", "Node.js", "Convex"],
    liveLink: "https://handsome-ibis-484.convex.app/",
    githubLink: "https://github.com/TooEzra/Kuza-Mart",
  },
  {
    id: 5,
    title: "Blogg application",
    description: "A full-stack blogging platform built with MERN stack thus Node.js for the backend, Mongodb for data storage, and React for the frontend, allowing users to create, edit, and share blog posts seamlessly.",
    technologies: ["Javascript", "CSS", "Mongodb", "HTML"],
    liveLink: "https://resplendent-syrniki-4a86a9.netlify.app/",
    githubLink: "https://github.com/TooEzra/blog_web",
  },
  {
    id: 6,
    title: "Network Monitoring Tool",
    description: "Advanced network diagnostics and monitoring application with real-time traffic analysis and alerting system.",
    technologies: ["Python", "Network Design", "Java", "Linux"],
    liveLink: "#",
    githubLink: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors duration-300">
      <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-muted text-accent text-sm rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="outline"
              className="border-border hover:bg-muted bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A showcase of my recent work and projects that demonstrate my skills in full-stack development, backend systems, and innovative solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
