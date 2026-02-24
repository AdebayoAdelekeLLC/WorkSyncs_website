"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { dashboardImg, arrowDown, star } from "../images";

const Hero = () => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const words = ["DELIVERY", "CYCLE"];
    const typingSpeed = 150;
    const deletingSpeed = 100;

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            const shouldDelete = isDeleting;

            setText(prev => {
                if (shouldDelete) {
                    return currentWord.substring(0, prev.length - 1);
                } else {
                    return currentWord.substring(0, prev.length + 1);
                }
            });

            if (!shouldDelete && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (shouldDelete && text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words]);

    return (
        <section className="relative pt-40 pb-0 overflow-hidden bg-[#03060d]">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center w-full mb-20"
                >
                    <div className="flex items-center justify-center gap-4 md:gap-8 mb-4">
                        <div className="flex -space-x-4 mb-2">
                            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gray-900 border-4 border-[#03060d] overflow-hidden relative">
                                <Image
                                    src="/image.gif"
                                    alt="Hero Avatar"
                                    fill
                                    className="object-cover opacity-100"
                                    priority
                                    unoptimized
                                />
                            </div>
                            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#0095ff] border-4 border-[#03060d] flex items-center justify-center shadow-xl shadow-blue-500/20">
                                <Image
                                    src={star}
                                    alt="Star"
                                    width={60}
                                    height={40}
                                    className="w-10 md:w-20 animate-spin animate-duration-[1000s]"
                                />
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-[155px] font-black text-white leading-none tracking-tighter uppercase">
                            SIMPLIFY
                        </h1>
                    </div>

                    <div className="flex items-center justify-center gap-4 md:gap-12 mb-4 lg:pr-40">
                        <h1 className="text-4xl sm:text-6xl md:text-[155px] font-black text-white leading-none tracking-tighter uppercase">
                            PROJECT
                        </h1>
                        <div className="pt-4 md:pt-10">
                            <Image
                                src={arrowDown}
                                alt="Arrow Down"
                                width={60}
                                height={40}
                                className="text-white/60 w-12 md:w-24 animate-pulse animate-duration-[5000ms]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-7xl">
                        <div className="flex flex-col items-center md:items-end md:w-[250px] shrink-0">
                            <div className="flex -space-x-3 mb-2">
                                {[1, 2, 3].map(i => (
                                    <img
                                        key={i}
                                        src={`https://i.pravatar.cc/150?u=${i}`}
                                        alt="image"
                                        className="w-14 h-14 rounded-full border-2 border-[#03060d] object-cover"
                                    />
                                ))}
                            </div>
                            <div className="text-[12px] font-bold text-gray-400 tracking-wider uppercase text-center md:text-right whitespace-nowrap">
                                Trusted by 24,000+<br />Marketers & Founders
                            </div>
                        </div>
                        <div className="md:w-[800px] flex items-center justify-center md:justify-start">
                            <h1 className="text-4xl sm:text-6xl md:text-[155px] font-black text-white leading-none tracking-tighter uppercase min-h-[1.2em] flex items-center">
                                {text}
                                <span className="animate-pulse ml-2 font-thin text-blue-500">|</span>
                            </h1>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 60 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative w-full max-w-6xl mx-auto rounded-t-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-white border-x-8 border-t-8 border-white/5 aspect-[16/10]"
                >
                    <Image
                        src={dashboardImg}
                        alt="dashboard image"
                        fill
                        className="object-cover opacity-100"
                        priority
                    />
                </motion.div>
            </div>

            <div className="h-24 bg-[#0095ff] w-full mt-[-100px] relative z-0" />
        </section>
    );
};

export default Hero;
