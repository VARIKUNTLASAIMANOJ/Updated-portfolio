"use client";

import { skillCategories, tools } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaDocker, FaGithub, FaJava } from "react-icons/fa";
import { HiChip, HiCode } from "react-icons/hi";
import {
    SiFastapi,
    SiGit,
    SiJavascript,
    SiLangchain,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiPostgresql,
    SiPostman,
    SiPython,
    SiReact,
    SiScikitlearn,
    SiTensorflow,
    SiTypescript,
    SiVercel,
} from "react-icons/si";

// Icon mapping for skills
const skillIcons: Record<string, React.ElementType> = {
    "Python": SiPython,
    "Java": FaJava,
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "scikit-learn": SiScikitlearn,
    "TensorFlow": SiTensorflow,
    "Pandas": SiPandas,
    "NumPy": SiNumpy,
    "Matplotlib": HiChip,
    "Machine Learning": HiChip,
    "Deep Learning": HiChip,
    "NLP": HiChip,
    "LangChain": SiLangchain,
    "LangGraph": SiLangchain,
    "LLM Orchestration": HiChip,
    "Vector Databases": HiChip,
    "Prompt Engineering": HiChip,
    "React": SiReact,
    "FastAPI": SiFastapi,
    "HTML/CSS": HiCode,
    "MySQL": SiMysql,
    "PostgreSQL": SiPostgresql,
    "Docker": FaDocker,
    "Vercel": SiVercel,
    // Tools
    "Git": SiGit,
    "GitHub": FaGithub,
    "Postman": SiPostman,
    "PowerBI": HiChip,
};

// Deduplicate skills for the "All" tab
const getUniqueSkills = (skills: string[]) => [...new Set(skills)];

const Skills = () => {
    const [activeTab, setActiveTab] = useState(skillCategories[0].id);
    const activeCategory = skillCategories.find((cat) => cat.id === activeTab);
    const displaySkills = activeCategory ? getUniqueSkills(activeCategory.skills) : [];

    return (
        <section id="skills" className="section">
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
                            className={`pill-btn transition-colors ${
                                activeTab === category.id
                                    ? "active text-white"
                                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
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
                        className="flex flex-wrap justify-center gap-3 min-h-[80px]"
                    >
                        {displaySkills.map((skill) => {
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

                {/* Divider */}
                <div className="border-t border-[var(--border)] my-12" />

                {/* Tools & Productivity Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
                        Tools & Productivity
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {tools.map((tool) => {
                            const Icon = skillIcons[tool] || HiCode;
                            return (
                                <motion.div
                                    key={tool}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="skill-icon"
                                >
                                    <Icon className="w-5 h-5 text-[var(--text-muted)]" />
                                    <span>{tool}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
