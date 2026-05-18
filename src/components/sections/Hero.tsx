"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowRight, HiDownload } from "react-icons/hi";

const roles = [
    "AI Developer",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
];

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (displayText.length < role.length) {
                        setDisplayText(role.slice(0, displayText.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 1000);
                    }
                } else {
                    if (displayText.length > 0) {
                        setDisplayText(displayText.slice(0, -1));
                    } else {
                        setIsDeleting(false);
                        setCurrentRole((prev) => (prev + 1) % roles.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    const scrollToContact = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center pt-16 relative">
            <div className="container flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl w-full text-center"
                >
                    <p className="text-[var(--text-muted)] text-lg mb-2">Hey, I&apos;m</p>

                    <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[var(--text-primary)]">
                        {personalInfo.name}
                    </h1>

                    <div className="h-10 mb-6 flex items-center justify-center">
                        <span className="hero-role text-xl md:text-2xl text-[var(--accent)] font-medium">
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </div>

                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                        {personalInfo.intro}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            onClick={scrollToContact}
                            className="btn-primary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get in Touch
                            <HiArrowRight />
                        </motion.button>

                        <motion.a
                            href="./assets/SaiManojVarikuntla_Resume.pdf"
                            download
                            className="btn-secondary inline-flex"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Download Resume
                            <HiDownload />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
