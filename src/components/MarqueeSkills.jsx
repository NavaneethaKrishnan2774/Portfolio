import python from "../assets/skills/python.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";
import django from "../assets/skills/django.png";
import mysql from "../assets/skills/mysql.png";
import github from "../assets/skills/github.png";
import docker from "../assets/skills/docker.png";
import figma from "../assets/skills/figma.png";
import powerbi from "../assets/skills/powerbi.jpg";
import unity from "../assets/skills/unity.png";
import vscode from "../assets/skills/vs code.jpg";

const skills = [
  { name: "Python", icon: python },
  { name: "React", icon: react },
  { name: "Django", icon: django },
  { name: "MySQL", icon: mysql },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "GitHub", icon: github },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
  { name: "Power BI", icon: powerbi },
  { name: "Unity", icon: unity },
  { name: "VS Code", icon: vscode },
];

export default function MarqueeSkills() {
  return (
    <section
      id="skills-marquee"
      className="
      overflow-hidden
      border-y
      border-white/10
      py-10
      bg-black/20
      "
    >
      <div className="marquee flex items-center">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="
            flex
            items-center
            gap-4
            mx-6
            min-w-[220px]

            px-5
            py-4

            rounded-2xl

            bg-white/5
            border
            border-white/10

            backdrop-blur-xl

            hover:border-green-400
            hover:scale-105

            transition-all
            duration-300
            "
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="
              w-12
              h-12
              object-contain
              "
            />

            <span
              className="
              text-white
              font-semibold
              text-lg
              "
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}