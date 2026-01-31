"use client";

import { aboutMe, education } from "@/lib/data";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="section-heading">About Me</h2>
                    <p className="section-subheading">
                        Get to know more about my background and journey
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* About Me Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line mb-8">
                            {aboutMe.description}
                        </div>

                        <motion.a
                            href="/assets/VarikuntlaSaiManoj_Resume.pdf"
                            download
                            className="btn-secondary inline-flex"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <HiDownload className="text-lg" />
                            Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
                            Education
                        </h3>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="pb-6 border-b border-[var(--border)] last:border-0 last:pb-0"
                                >
                                    <p className="text-sm text-[var(--accent)] font-medium mb-1">
                                        {edu.year}
                                    </p>
                                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-[var(--text-secondary)] text-sm">
                                        {edu.institution}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
