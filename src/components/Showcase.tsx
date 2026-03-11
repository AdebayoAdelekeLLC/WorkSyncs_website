"use client";

import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { waves, dashboardImg, salesChannels, boltshift, featherdev, galileo, globalbar, nietzsche } from "@/images";
import Image from "next/image";

const Showcase = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Can I use multiple devices with the same account?",
            answer: "Our customer support operates 24/7. Feel free to reach out to us anytime you have questions or need assistance."
        },
        {
            question: "Can I use multiple devices with the same account?",
            answer: "Our customer support operates 24/7. Feel free to reach out to us anytime you have questions or need assistance."
        }
    ];

    return (
        <section className="bg-white px-6 md:px-[80px] lg:px-[103px] relative isolate" id="showcase">
            <div className="py-24">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-4xl font-light text-gray-900 leading-tight mb-4">
                            Tired of switching between HR tools, project trackers, and messaging apps?
                        </h2>
                        <p className="text-lg font-thin text-gray-400 mb-8 max-w-lg leading-relaxed">
                            Are communication gaps causing project delays? You can now manage your team on one platform!
                        </p>

                        <div className="space-y-4 max-w-lg p-4 bg-[#60ACEC26]">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="rounded-2xl overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                        className={`w-full flex items-center justify-between p-6 transition-colors ${openIndex === idx ? "bg-[#0097FE2E]" : "bg-[#0097FE]"}`}
                                    >
                                        <span className={`text-lg tracking-tight text-left ${openIndex === idx ? "text-[#000D25]" : "text-white"}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-5 h-5 flex items-center justify-center rounded-sm transition-transform ${openIndex === idx ? "text-black" : "text-white"}`}>
                                            {openIndex === idx ? (
                                                <X size={16} strokeWidth={3} />
                                            ) : (
                                                <Plus size={16} strokeWidth={3} />
                                            )}
                                        </div>
                                    </button>
                                    {openIndex === idx && (
                                        <div className="bg-[#0097FE2E] px-6 pb-6 mt-[-1px]">
                                            <p className="text-base font-thin text-black leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-[3rem] overflow-hidden">
                            <video src="/element-collection3.mp4" autoPlay muted loop className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="bg-[#03060d] relative px-6 md:px-12 py-24 overflow-hidden rounded-[2rem] md:rounded-[3rem] mb-24 min-h-[400px] md:min-h-[600px] flex flex-col justify-between">
                <div className="relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-12 items-stretch mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 h-full"
                        >
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-full">
                                <Image
                                    src={dashboardImg}
                                    alt="Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-5 h-full"
                        >
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-full">
                                <Image
                                    src={salesChannels}
                                    alt="Sales Channels"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center gap-10">
                        <p className="text-sm font-bold text-[#FFFFFF] uppercase tracking-[0.3em]">
                            Trusted by thousands from worldwide
                        </p>
                         
                         {/* let's update this logo by making it display in two's on mobile, and the size should also be reduced on mobile */}
                        <div className="flex flex-wrap justify-center gap-10 opacity-70">
                            <Image src={galileo} alt="Galileo" className="h-8 w-auto object-contain md:h-12" />
                            <Image src={featherdev} alt="FeatherDev" className="h-8 w-auto object-contain md:h-12" />
                            <Image src={boltshift} alt="Boltshift" className="h-8 w-auto object-contain md:h-12" />
                            <Image src={nietzsche} alt="Nietzsche" className="h-8 w-auto object-contain md:h-12" />
                            <Image src={globalbar} alt="GlobalBar" className="h-8 w-auto object-contain md:h-12" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[200px] opacity-40 pointer-events-none">
                    <Image src={waves} alt="Waves" fill className="object-cover object-bottom" />
                </div>
            </div>
        </section>
    );
};

export default Showcase;
