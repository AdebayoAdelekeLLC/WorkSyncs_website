"use client";

import { motion } from "framer-motion";
import { User, PieChart, FileText, Banknote } from "lucide-react";
import { remoteWorkers, customerRating } from "@/images";
import Image from "next/image";

const ValueProp = () => {
    const features = [
        {
            title: "HR & Leave Management",
            description: "Streamline HR. Welcome new hires, track performance, and slash admin workload by X%",
            icon: User,
            color: "bg-blue-50 text-blue-400"
        },
        {
            title: "Project Management",
            description: "Streamline HR. Welcome new hires, track performance, and slash admin workload by X%",
            icon: PieChart,
            color: "bg-blue-50 text-blue-400"
        },
        {
            title: "Attendance & Clock-In",
            description: "Streamline HR. Welcome new hires, track performance, and slash admin workload by X%",
            icon: FileText,
            color: "bg-[#0095ff] text-white"
        },
        {
            title: "Resource Center",
            description: "Streamline HR. Welcome new hires, track performance, and slash admin workload by X%",
            icon: Banknote,
            color: "bg-blue-50 text-blue-400"
        }
    ];

    return (
        <section className="py-16 bg-[#F6FBFF] overflow-hidden" id="value-prop">
            <div className="md:px-[80px] px-[26px] lg:px-[103px] relative isolate">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-24 text-left md:text-left">
                    <div className="">
                        <h2 className="text-3xl md:text-5xl text-[#0a0e1a] leading-tight">
                            Ideal for In-Office Teams and <br className="hidden md:block" /> Perfect for Remote Workers!
                        </h2>
                    </div>
                    <div className="md:w-1/3 md:text-right">
                        <p className="text-base mb-6 tracking-widest font-light text-[#555555]">
                            More Than a Workspace. <br className="hidden md:block" />
                            A New Solution for Workflow
                        </p>
                        <button className="bg-[#0095ff] hover:bg-blue-500 text-white px-10 py-3.5 rounded-lg text-xs font-black tracking-widest uppercase transition-all shadow-lg shadow-blue-500/20">
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    <div className="space-y-12">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex items-start gap-8 group"
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-sm ${feature.color} transition-transform group-hover:scale-110 duration-300`}>
                                    <feature.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-[#0a0e1a] mb-3">{feature.title}</h3>
                                    <p className="text-base font-light text-[#555555] leading-relaxed max-w-xs">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative group">
                            <Image src={remoteWorkers} alt="Remote Workers" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="absolute -bottom-8 -right-8 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] max-w-[340px] z-10"
                        >
                            <Image src={customerRating} alt="Customer Rating" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ValueProp;
