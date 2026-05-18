"use client";

import { personalInfo } from "@/lib/data";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // Send notification email to you
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: personalInfo.name,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );

            // Send auto-reply to the sender
            if (process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID) {
                await emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                    process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,
                    {
                        to_name: formData.name,
                        to_email: formData.email,
                        from_name: personalInfo.name,
                        message: formData.message,
                    },
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
                );
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const contactInfo = [
        {
            icon: HiMail,
            label: "Email",
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
        },
        {
            icon: HiPhone,
            label: "Phone",
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
        },
        {
            icon: HiLocationMarker,
            label: "Location",
            value: personalInfo.location,
            href: null,
        },
    ];

    const socialLinks = [
        { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
        { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <h2 className="section-heading">Contact</h2>
                    <p className="section-subheading">
                        Let&apos;s discuss your next project
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Side - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        {contactInfo.map((info) => (
                            <div key={info.label}>
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        className="card p-4 flex items-center gap-4 hover:border-[var(--accent)] transition-colors block"
                                    >
                                        <div className="w-10 h-10 bg-[var(--bg-tertiary)] rounded-lg flex items-center justify-center">
                                            <info.icon className="w-5 h-5 text-[var(--text-muted)]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[var(--text-muted)]">{info.label}</p>
                                            <p className="text-[var(--text-primary)] font-medium">
                                                {info.value}
                                            </p>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="card p-4 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[var(--bg-tertiary)] rounded-lg flex items-center justify-center">
                                            <info.icon className="w-5 h-5 text-[var(--text-muted)]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[var(--text-muted)]">{info.label}</p>
                                            <p className="text-[var(--text-primary)] font-medium">
                                                {info.value}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="pt-4">
                            <p className="text-sm text-[var(--text-muted)] mb-3">Connect with me</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 card flex items-center justify-center hover:border-[var(--accent)] transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5 text-[var(--text-secondary)]" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="form-input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="form-input"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="form-input resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === "loading"}
                                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
                                whileTap={{ scale: status === "loading" ? 1 : 0.99 }}
                            >
                                {status === "loading" ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <HiArrowRight />
                                    </>
                                )}
                            </motion.button>

                            {status === "success" && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-green-600 dark:text-green-400 text-sm text-center"
                                >
                                    Message sent successfully!
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-red-600 dark:text-red-400 text-sm text-center"
                                >
                                    Failed to send. Please try again.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-[var(--border)] text-center">
                    <p className="text-sm text-[var(--text-muted)]">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
