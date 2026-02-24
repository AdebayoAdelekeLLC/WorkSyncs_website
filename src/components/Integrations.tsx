"use client";

import { motion } from "framer-motion";

const IntegrationCard = () => (
    <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 border border-white/10 rounded-2xl flex-shrink-0 flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
        <div className="w-10 h-10 bg-gray-800 rounded-xl group-hover:scale-110 transition-transform shadow-inner flex items-center justify-center">
            <div className="w-4 h-4 bg-white/10 rounded-sm" />
        </div>
    </div>
);

const Integrations = () => {
    const apps = Array.from({ length: 12 });

    return (
        <section className="py-16 bg-[#000D25] text-center overflow-hidden" id="integrations">
            <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 relative z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-8 tracking-tighter">
                        Integrate Your Favorite Apps
                    </h2>
                    <p className="text-sm md:text-lg font-thin text-white tracking-widest">
                        Discover the Powerful Features That Make WorkSyncs the Ultimate <br className="hidden md:block" /> SaaS Solution for Scaling Your Business
                    </p>
                </motion.div>


                <div className="relative z-10 space-y-8">
                    <div className="flex overflow-hidden group">
                        <motion.div
                            className="flex gap-6 pr-6"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {[...apps, ...apps].map((_, i) => (
                                <IntegrationCard key={`top-${i}`} />
                            ))}
                        </motion.div>
                    </div>

                    <div className="flex overflow-hidden group">
                        <motion.div
                            className="flex gap-6 pr-6"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {[...apps, ...apps].map((_, i) => (
                                <IntegrationCard key={`bottom-${i}`} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
