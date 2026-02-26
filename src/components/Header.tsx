"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
// "PRICING",
    const navLinks = ["HOME", "FEATURES", "DOCS", "CONTACT US"];

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/40 backdrop-blur-xl py-4" : "bg-transparent py-10"
                }`}
        >
            <div className="px-6 md:px-16 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={150}
                        height={100}
                        className="w-32 md:w-[150px]"
                    />
                </Link>

                <div className="flex items-center gap-8">
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link}
                                href={`#${link.toLowerCase().replace(" ", "-")}`}
                                className="text-[12px] font-bold text-white/70 hover:text-white tracking-widest transition-colors"
                            >
                                {link}
                            </Link>
                        ))}
                    </nav>

                    <a
                        href="https://app.worksyncs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:block bg-[#0095ff] hover:bg-blue-500 text-white px-7 py-2.5 rounded-lg text-[11px] font-bold tracking-widest uppercase transition-all shadow-lg shadow-blue-500/20 text-center"
                    >
                        GET STARTED
                    </a>

                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#03060d]/fb backdrop-blur-2xl border-b border-white/5 lg:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-8 gap-6 h-screen bg-[#03060d]">
                            {navLinks.map((link) => (
                                <Link
                                    key={link}
                                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-bold text-white/70 hover:text-white tracking-widest"
                                >
                                    {link}
                                </Link>
                            ))}
                            <a
                                href="https://app.worksyncs.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0095ff] text-white px-8 py-4 rounded-xl font-bold tracking-widest uppercase mt-4 text-center"
                            >
                                GET STARTED
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
