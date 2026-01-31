"use client";

import { useUI } from "@/context/UIContext";
import { navLinks, personalInfo } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const { isNavOpen, setNavOpen } = useUI();
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((link) => link.href.replace("#", ""));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setNavOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "navbar shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="container flex items-center justify-between h-16">
                {/* Name/Logo */}
                <motion.a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("#home");
                    }}
                    className="text-lg font-semibold text-[var(--text-primary)] cursor-pointer"
                    whileHover={{ opacity: 0.7 }}
                >
                    {personalInfo.name}
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeSection === link.href.replace("#", "")
                                ? "text-[var(--text-primary)] bg-[var(--bg-tertiary)]"
                                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setNavOpen(!isNavOpen)}
                    className="md:hidden p-2 text-[var(--text-primary)]"
                    aria-label="Toggle menu"
                >
                    {isNavOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isNavOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-[var(--bg-secondary)] border-t border-[var(--border)]"
                    >
                        <div className="container py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    type="button"
                                    onClick={() => scrollToSection(link.href)}
                                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-md transition-colors ${activeSection === link.href.replace("#", "")
                                        ? "text-[var(--text-primary)] bg-[var(--bg-tertiary)]"
                                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
