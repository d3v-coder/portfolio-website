"use client";

import { useEffect, useState } from "react";

const skillsData = [
  { name: "MongoDB", proficiency: 98 },
  { name: "Express.js", proficiency: 90 },
  { name: "React", proficiency: 95 },
  { name: "Node.js", proficiency: 90 },
  { name: "Python", proficiency: 90 },
  { name: "Java", proficiency: 97 },
  { name: "HTML", proficiency: 98 },
  { name: "CSS", proficiency: 98 },
  { name: "Network Design", proficiency: 87 },
];

function SkillBar({ name, proficiency }: { name: string; proficiency: number }) {
  const [displayProficiency, setDisplayProficiency] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayProficiency(proficiency);
    }, 100);
    return () => clearTimeout(timer);
  }, [proficiency]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-foreground">{name}</span>
        <span className="text-accent font-semibold">{displayProficiency}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-accent h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${displayProficiency}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">My Skills</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Column */}
          <div>
            {skillsData.slice(0, 5).map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </div>

          {/* Second Column */}
          <div>
            {skillsData.slice(5).map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
