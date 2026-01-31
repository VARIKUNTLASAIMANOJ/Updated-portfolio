"use client";

import { personalInfo, projects } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowRight, HiEye } from "react-icons/hi";

const Projects = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section id="projects" className="section">
            {/* Custom Circular Cursor with Rotating Text */}
            <div
                className={`custom-cursor ${cursorVisible ? "visible" : ""}`}
                style={{ left: cursorPos.x, top: cursorPos.y }}
            >
                <div className="cursor-circle"></div>
                <div className="cursor-text">
                    {"VIEW DETAILS • VIEW DETAILS • ".split("").map((char, i) => (
                        <span
                            key={i}
                            style={{ transform: `rotate(${i * 11}deg)` }}
                        >
                            {char}
                        </span>
                    ))}
                </div>
                <div className="cursor-eye">
                    <HiEye className="w-5 h-5" />
                </div>
            </div>

            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <h2 className="section-heading">Projects</h2>
                    <p className="section-subheading">
                        A selection of my recent work
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card overflow-hidden"
                        >
                            <div
                                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Project Image - Commented out for now
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-image-link md:w-2/5 bg-[var(--bg-tertiary)] flex items-center justify-center group transition-colors hover:bg-[var(--border)] relative overflow-hidden min-h-[250px] md:min-h-[300px]"
                                    onMouseEnter={() => setCursorVisible(true)}
                                    onMouseLeave={() => setCursorVisible(false)}
                                >
                                    {project.image ? (
                                        <NextImage
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <HiCode className="w-16 h-16 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                                    )}
                                </a>
                                */}

                                {/* Project Content */}
                                <div className="w-full p-6 md:p-8 flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                                        {project.title}
                                    </h3>
                                    {project.description.includes('•') ? (
                                        <ul className="text-[var(--text-secondary)] mb-4 leading-relaxed space-y-1 list-none">
                                            {project.description.split('\n').map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                    )}

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Buttons */}
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary inline-flex"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            View Details
                                        </motion.a>
                                        <motion.a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary inline-flex"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Check Out
                                            <HiArrowRight />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-10"
                >
                    <motion.a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View All Projects
                        <HiArrowRight />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
