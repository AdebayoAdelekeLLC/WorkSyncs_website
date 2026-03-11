"use client";

import { motion } from "framer-motion";
import { users, layout, percent } from "@/images";
import { teamImg } from "@/images";
import Image from "next/image";

const Features = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="features">
            <div className="md:px-[80px] px-[26px] lg:px-[103px] relative isolate">

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0a0e1a] leading-tight mb-6 font-bold">
                            Manage employees, track work, and collaborate with your team — all in one platform.
                        </h2>
                        <p className="text-base md:text-lg text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0">
                            WorkSyncs brings HR management, job tracking, contacts management, and team communication into one powerful workspace so your business can run smoothly without juggling multiple tools.
                        </p>

                        <div className="max-w-md mx-auto lg:mx-0">
                            <div className="bg-gray-50 p-2 rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4 border border-gray-100 overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent px-6 py-4 flex-1 text-sm font-bold text-gray-800 placeholder:text-gray-400 focus:outline-none w-full"
                                />
                                <a
                                    href="https://app.worksyncs.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#0095ff] hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-[11px] font-black tracking-widest uppercase transition-all shadow-lg shadow-blue-500/20 whitespace-normal sm:whitespace-nowrap text-center"
                                >
                                    Sign Up – It's Free!
                                </a>
                            </div>
                            <p className="text-[10px] sm:text-[11px] font-bold text-gray-400 sm:pl-4 uppercase tracking-widest text-center sm:text-left">
                                No credit card required - Cancel anytime
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative w-full mt-10 lg:mt-0"
                    >
                        <div className="aspect-[1.2/1] rounded-[2.5rem] overflow-hidden bg-gray-100 relative shadow-2xl">
                            <Image
                                src={teamImg}
                                alt="team image"
                                fill
                                className="object-cover opacity-100"
                                priority
                            />

                            <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 w-[85%] sm:w-[60%] glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/20 backdrop-blur-2xl">
                                <p className="text-sm sm:text-base text-white/70 mb-2 sm:mb-4 leading-relaxed tracking-wide">
                                    Make your business more <br className="hidden sm:block" /> efficient with our great software!
                                </p>
                                <div className="text-5xl sm:text-7xl font-black text-white tracking-tighter">2.5x</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 pt-16 border-t border-gray-50">
                    <div className="flex-1 flex flex-wrap justify-center lg:justify-start -space-y-10 sm:space-y-0 lg:-space-x-8">
                        {[
                            { label: "HUMAN\nRESOURCES", icon: users },
                            { label: "WORK\nMANAGEMENT", icon: layout },
                            { label: "CONTACTS & CHAT", icon: percent },
                            // { label: "CHAT", icon: percent },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex flex-col items-center relative"
                                style={{ zIndex: 10 + idx }}
                            >
                                <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border border-gray-200 flex flex-col gap-4 items-center justify-center bg-white hover:bg-gray-50 transition-all cursor-default group shadow-sm scale-90 sm:scale-100">
                                    <div className="text-gray-800 transition-transform group-hover:scale-110 duration-300">
                                        <Image 
                                            src={item.icon} 
                                            alt="icon" 
                                            width={60} 
                                            height={60} 
                                            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[80px] lg:h-[80px]" 
                                        />
                                    </div>

                                    <div className="text-[12px] sm:text-[14px] lg:text-[16px] font-bold tracking-[0.1em] text-gray-400 text-center leading-tight uppercase">
                                        {item.label.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 text-center lg:text-left py-10 lg:py-0"
                    >
                        <h2 className="text-4xl sm:text-4xl md:text-5xl text-[#0a0e1a] leading-[1.1] tracking-tight">
                            <span className="font-bold">The All-in-One</span> <br />
                            <span className="font-light">Team Workspace</span>
                        </h2>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Features;
