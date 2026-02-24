"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const TestimonialCard = ({ name, handle, text, imageIdx }: { name: string, handle: string, text: string, imageIdx: number }) => (
    <div className="flex-shrink-0 w-[320px] md:w-[450px] bg-[#f8fafc] p-8 rounded-[2rem] border border-gray-100/50 flex flex-col gap-4">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img
                    src={`https://i.pravatar.cc/150?u=${name.replace(' ', '')}`}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                    <span className="text-base font-thin text-[#020617]">{name}</span>
                    <CheckCircle2 size={16} className=" fill-[#0095ff] text-white" />
                    <span className="text-sm font-thin text-gray-400 ml-1">{handle}</span>
                </div>
            </div>
        </div>
        <p className="text-[#020617] font-thin text-[15px] leading-relaxed">
            "{text}"
        </p>
    </div>
);

const Testimonials = () => {
    const row1 = [
        { name: "Savannah Nguyen", handle: "savannah", text: "Outstanding experience from start to finish. The team was professional and attentive." },
        { name: "Marvin McKinney", handle: "marvinmn", text: "I've never been more satisfied with a purchase. Quality and service were top-notch." },
        { name: "Dianne Russell", handle: "diannerussell", text: "Incredible attention to detail and customer care. Will definitely return!" },
    ];

    const row2 = [
        { name: "Courtney Henry", handle: "courtneyh", text: "A truly remarkable experience. The staff went above and beyond to assist me." },
        { name: "Devon Lane", handle: "devonlane", text: "From the moment I walked in, I felt valued. Exceptional service and a great atmosphere." },
        { name: "Arlene McCoy", handle: "arlenemc", text: "Top-quality product and excellent customer service. I couldn't ask for more." },
    ];

    return (
        <section className="py-16 bg-white overflow-hidden" id="testimonials">
            <div className="text-center mb-10 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-thin text-[#020617] mb-4"
                >
                    What people are saying
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[#020617] max-w-2xl mx-auto leading-relaxed"
                >
                    "Users consistently praise our product for its exceptional quality, ease of use, and outstanding customer support."
                </motion.p>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-6 pr-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
                            <TestimonialCard key={`r1-${i}`} {...item} imageIdx={i} />
                        ))}
                    </motion.div>
                </div>

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-6 pr-6"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            duration: 45,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
                            <TestimonialCard key={`r2-${i}`} {...item} imageIdx={i} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
