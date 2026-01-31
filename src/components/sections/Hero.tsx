"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";

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
        <section id="home" className="min-h-screen flex items-center pt-16">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="order-2 md:order-1"
                    >
                        <p className="text-[var(--text-muted)] text-lg mb-2">Hey, I&apos;m</p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[var(--text-primary)]">
                            {personalInfo.name}
                        </h1>

                        <div className="h-10 mb-6">
                            <span className="text-xl md:text-2xl text-[var(--accent)] font-medium">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </div>

                        <p className="text-[var(--text-secondary)] text-lg max-w-lg mb-8 leading-relaxed">
                            {personalInfo.intro}
                        </p>

                        <motion.button
                            onClick={scrollToContact}
                            className="btn-primary"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get in Touch
                            <HiArrowRight />
                        </motion.button>
                    </motion.div>

                    {/* Right Side - Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="order-1 md:order-2 flex justify-center"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg overflow-hidden">
                            <Image
                                src={personalInfo.profileImage}
                                alt={personalInfo.name}
                                width={384}
                                height={384}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
