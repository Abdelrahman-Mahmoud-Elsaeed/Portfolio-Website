"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects: Array<{
    name: string;
    description: string;
    tags: string[];
    gradient: string;
    github?: string;
    link?: string;
  }> = [
    {
      name: "NEXUS-CRM",
      description:
        "A multi-tenant enterprise sales engine with PostgreSQL data isolation, Redis RBAC caching, optimistic Kanban updates, secure invitations, and API rate limiting.",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis"],
      gradient: "from-cyan-500 to-blue-500",
      github: "https://github.com/Abdelrahman-Mahmoud-Elsaeed/NEXUS-CRM",
    },
    {
      name: "MediMind",
      description:
        "An intelligent healthcare PWA with three-tier push/SMS/alert escalation, OCR guardrails for medicine labels, real-time dashboards, Docker, and Terraform-based AWS infrastructure.",
      tags: ["Next.js", "Node.js", "MongoDB", "Socket.IO", "Docker", "Terraform"],
      gradient: "from-emerald-500 to-cyan-500",
      github: "https://github.com/Abdelrahman-Mahmoud-Elsaeed/MediMind",
    },
    {
      name: "Product Management Platform",
      description:
        "A decoupled product tracking platform with a React frontend, Express API, MongoDB persistence, and GitHub Actions workflows for quality checks and deployment testing.",
      tags: ["React", "TypeScript", "Express", "MongoDB", "Docker", "CI/CD"],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/Abdelrahman-Mahmoud-Elsaeed/Product_Management_Ui",
      link: "https://github.com/Abdelrahman-Mahmoud-Elsaeed/Product_Management_API",
    },
    {
      name: "Linear Equations Solver",
      description:
        "A high-performance C++ engine using Gaussian elimination with partial pivoting and OpenMP parallelization, processing up to 10,000 equations in approximately three minutes.",
      tags: ["C++", "Algorithms", "OpenMP", "Multithreading"],
      gradient: "from-amber-500 to-rose-500",
      github: "https://github.com/Abdelrahman-Mahmoud-Elsaeed/linear_equation_solver_in_Cpp",
    },
  ];

  return (
    <section
      id="projects"
      className="snap-start min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-4 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}
              />
              <div className="relative bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                         className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                         aria-label={`Open ${project.name} GitHub repository (opens in a new tab)`}
                      >
                          <Github aria-hidden="true" className="w-4 h-4 text-cyan-400" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                         className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                         aria-label={`Open ${project.name} external link (opens in a new tab)`}
                      >
                          <ExternalLink aria-hidden="true" className="w-4 h-4 text-cyan-400" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mb-3 text-white">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4 whitespace-pre-line flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-gray-800/50 border border-purple-500/30 text-purple-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
