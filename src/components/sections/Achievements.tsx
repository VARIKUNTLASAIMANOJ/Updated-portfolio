"use client";

import { achievements, certifications } from "@/lib/data";
import { motion } from "framer-motion";
const Achievements = () => {
    return (
        <section id="achievements" className="section bg-[var(--bg-secondary)]">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <h2 className="section-heading">Achievements</h2>
                    <p className="section-subheading">
                        Recognition and milestones in my journey
                    </p>
                </motion.div>

                {/* Alternating Timeline */}
                <div className="relative max-w-3xl mx-auto mb-16">
                    {/* Center line for desktop */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

                    {/* Left line for mobile */}
                    <div className="absolute left-[3px] top-0 bottom-0 w-px bg-[var(--border)] md:hidden" />

                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative mb-8 last:mb-0 md:w-1/2 ${index % 2 === 0
                                ? "md:pr-8 md:text-right md:ml-0"
                                : "md:pl-8 md:ml-auto"
                                }`}
                        >
                            {/* Timeline dot - Desktop */}
                            <div className="hidden md:block absolute top-2 w-3 h-3 bg-[var(--accent)] rounded-full z-10"
                                style={{
                                    left: index % 2 === 0 ? 'auto' : '-6px',
                                    right: index % 2 === 0 ? '-6px' : 'auto',
                                }}
                            />

                            {/* Timeline dot - Mobile */}
                            <div className="md:hidden absolute left-0 top-2 w-2 h-2 bg-[var(--accent)] rounded-full z-10" />

                            <div className="pl-6 md:pl-0">
                                <span className="text-sm text-[var(--accent)] font-medium">
                                    {achievement.year}
                                </span>
                                <h4 className="text-lg font-semibold text-[var(--text-primary)] mt-1 mb-2">
                                    {achievement.title}
                                </h4>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed md:text-left">
                                    {achievement.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6 text-center">
                        Certifications
                    </h3>

                    {/* Centered Certification Cards */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="card flex-shrink-0 w-72 p-5"
                            >
                                <div>
                                    <h4 className="font-medium text-[var(--text-primary)] mb-1">
                                        {cert.name}
                                    </h4>
                                    <p className="text-sm text-[var(--text-muted)]">
                                        {cert.platform}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
