"use client";

import { motion } from "framer-motion";
import { users, layout, percent } from "@/images";
import { teamImg } from "@/images";
import Image from "next/image";

const Features = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="features">
            <div className="md:px-[80px] px-[26px] lg:px-[103px] relative isolate">

                <div className="flex flex-col lg:flex-row items-center gap-16 mb-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl md:text-5xl text-[#0a0e1a] leading-tight mb-6">
                            Tired of juggling multiple tools for HR and project management?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-xl">
                            Are communication gaps causing project delays? <br />
                            You can now manage your team on one platform!
                        </p>

                        <div className="max-w-md">
                            <div className="bg-gray-50 p-2 rounded-2xl flex items-center gap-2 mb-4 border border-gray-100">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-transparent px-6 py-4 flex-1 text-sm font-bold text-gray-800 placeholder:text-gray-400 focus:outline-none"
                                />
                                <button className="bg-[#0095ff] hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-[11px] font-black tracking-widest uppercase transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap">
                                    Sign Up – It's Free!
                                </button>
                            </div>
                            <p className="text-[11px] font-bold text-gray-400 pl-4 uppercase tracking-widest">
                                No credit card required - Cancel anytime
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="aspect-[1.2/1] rounded-[2.5rem] overflow-hidden bg-gray-100 relative shadow-2xl">
                            <Image
                                src={teamImg}
                                alt="team image"
                                fill
                                className="object-cover opacity-100"
                                priority
                            />

                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[60%] glass p-4 rounded-3xl border border-white/20 backdrop-blur-2xl">
                                <p className="text-base text-[#FFFFFFB2] mb-4 leading-relaxed tracking-wide">
                                    Make your business more <br /> efficient with our great software!
                                </p>
                                <div className="text-7xl font-black text-white tracking-tighter">2.5x</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-16 border-t border-gray-50">
                    <div className="flex-1 flex flex-wrap justify-center lg:justify-start lg:-space-x-6">
                        {[
                            { label: "HUMAN\nRESOURCES", icon: users },
                            { label: "PROJECT\nMANAGEMENT", icon: layout },
                            { label: "CUSTOMER\nRELATIONSHIP", icon: percent },
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
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-gray-200 flex flex-col gap-4 items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-default group shadow-sm">
                                    <div className="text-gray-800 transition-transform group-hover:scale-110 duration-300">
                                        <Image src={item.icon} alt="icon" width={70} height={70} className="md:w-[100px] md:h-[100px]" />
                                    </div>

                                    <div className="text-[14px] md:text-[16px] font-bold tracking-[0.1em] text-gray-400 text-center leading-tight uppercase">
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
                        className="flex-shrink-0 text-center lg:text-left pt-8 lg:pt-0"
                    >
                        <h2 className="text-4xl md:text-[52px] text-[#0a0e1a] leading-[1.1] tracking-tight">
                            <span className="font-bold">Our 3-in-1</span> <br />
                            <span className="font-light">Workspace <br /> Solution</span>
                        </h2>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Features;
