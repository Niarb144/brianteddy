"use client";

import { useState } from "react";
import Modal from "./Modal";
import { Cursor } from "react-simple-typewriter";

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {title: "The Imaara Mall", image: "/images/imaara.webp", description: "A Mall website built using HTML, PHP, Javascript" },
    {title: "Epione Health", image: "/images/epione.png" },
    {title: "AbokAdventures", image: "/images/abok.png" },
    {title: "Hero-X", image: "/images/hero-x.png" },
    {title: "Maze-Cralwer", image: "/images/maze-crawler.png" },
    { title: "Task Manager", image: "/images/task.png" },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col justify-center min-h-screen px-20 py-10 md:px-10"
    >
      <h1 className="text-4xl font-semibold mb-10">Projects</h1>

      <ul className="space-y-6">
        {projects.map((proj, index) => (
          <li key={index}>
            <button
              onClick={() => setSelected(proj)}
              className="text-xl text-[--Primary-text] relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[--Complimentary-color] hover:text-[--Complimentary-color] hover:after:w-full transition-all cursor-pointer"
            >
              {proj.title}
            </button>
          </li>
        ))}
      </ul>

      {selected && (
        <Modal onClose={() => setSelected(null)} project={selected} />
      )}
    </section>
  );
}
