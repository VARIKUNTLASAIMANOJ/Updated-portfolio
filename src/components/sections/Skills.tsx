"use client";

import { skillCategories } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaJava } from "react-icons/fa";
import { HiChip, HiCode, HiCog, HiDatabase } from "react-icons/hi";
import {
    SiCss3,
    SiGit,
    SiHtml5,
    SiLangchain,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiPostman,
    SiPython,
    SiReact,
    SiStreamlit
} from "react-icons/si";

// Icon mapping for skills
const skillIcons: Record<string, React.ElementType> = {
    // Programming Languages
    "Python": SiPython,
    "Java": FaJava,
    // Data Analytics & ML
    "Pandas": SiPandas,
    "NumPy": SiNumpy,
    "Matplotlib": HiChip,
    "NLP": HiChip,
    // Frontend Development
    "HTML": SiHtml5,
    "CSS": SiCss3,
    "Streamlit": SiStreamlit,
    "React.js": SiReact,
    // AI Frameworks & Concepts
    "RAG": HiChip,
    "LangChain": SiLangchain,
    "Prompt Engineering": HiChip,
    "API Integrations": HiDatabase,
    // Tools & Technologies
    "Git": SiGit,
    "GitHub": FaGithub,
    "Postman": SiPostman,
    "MySQL": SiMysql,
    "PowerBI": HiChip,
    "GCP": HiCog,
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState(skillCategories[0].id);
    const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

    return (
        <section id="skills" className="section bg-[var(--bg-secondary)]">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-heading">Skills</h2>
                    <p className="section-subheading">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                >
                    {skillCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === category.id
                                ? "bg-[var(--accent)] text-white"
                                : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {activeCategory?.skills.map((skill) => {
                            const Icon = skillIcons[skill] || HiCode;
                            return (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="skill-icon"
                                >
                                    <Icon className="w-5 h-5 text-[var(--text-muted)]" />
                                    <span>{skill}</span>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;
