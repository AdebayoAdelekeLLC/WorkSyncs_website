"use client";

import { motion } from "framer-motion";

const CTA = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-[#03060d] rounded-[3rem] p-12 md:p-24 overflow-hidden border border-white/10 shadow-3xl text-center"
                >
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                        <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,149,255,0.1)_0%,transparent_60%)] animate-pulse" />
                        <div className="absolute -bottom-1/2 left-0 w-full h-full bg-gradient-to-t from-blue-500/5 to-transparent" />
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 uppercase tracking-tighter"
                        >
                            Grow your business faster <br className="hidden md:block" /> with WorkSyncs.
                        </motion.h2>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
                        >
                            Simplify operations, improve collaboration, and manage your team more efficiently, all from one workspace.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <p className="text-sm font-bold text-[#0095ff] uppercase tracking-[0.2em]">
                                Start using WorkSyncs today.
                            </p>
                            
                            <a
                                href="https://app.worksyncs.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0095ff] hover:bg-blue-500 text-white px-12 py-5 rounded-2xl text-base font-black tracking-widest uppercase transition-all shadow-[0_20px_40px_rgba(0,149,255,0.3)] hover:scale-105 active:scale-95"
                            >
                                Start Free
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
