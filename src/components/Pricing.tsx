"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Starter",
            description: "Small to medium-sized teams",
            monthlyPrice: 59,
            yearlyPrice: 44,
            features: [
                "Employee Web App",
                "Team Lead Admin Access",
                "Project Management",
                "Attendance and Leave Management",
                "Upgrade Prompt and Support"
            ],
            button: "Start 14 Days Free Trial",
            isPopular: false
        },
        {
            name: "Pro",
            description: "Small to medium-sized teams",
            monthlyPrice: 99,
            yearlyPrice: 74,
            features: [
                "Employee Web App",
                "Team Lead Admin Access",
                "Project Management",
                "Attendance and Leave Management",
                "Upgrade Prompt and Support"
            ],
            button: "Start 14 Days Free Trial",
            isPopular: true
        },
        {
            name: "Enterprise",
            description: "Small to medium-sized teams",
            monthlyPrice: 199,
            yearlyPrice: 149,
            features: [
                "Employee Web App",
                "Team Lead Admin Access",
                "Project Management",
                "Attendance and Leave Management",
                "Upgrade Prompt and Support"
            ],
            button: "Start 14 Days Free Trial",
            isPopular: false
        }
    ];

    return (
        <section className="py-24 bg-white" id="pricing">
            <div className="md:px-[80px] px-[26px] lg:px-[103px] relative isolate text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Free forever. Upgrade for unlimited tasks
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Discover the Powerful Features That Make WorkSyncs the Ultimate <br />
                        SaaS Solution for Scaling Your Business
                    </p>
                </motion.div>

                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center p-1 bg-gray-50 rounded-full border border-gray-100 mb-4">
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-8 py-2 rounded-full text-base font-bold transition-all ${!isAnnual ? 'bg-[#0095ff] text-white shadow-lg' : 'text-gray-400'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`px-8 py-2 rounded-full text-base font-bold transition-all ${isAnnual ? 'bg-[#0095ff] text-white shadow-lg' : 'text-gray-400'}`}
                        >
                            Yearly
                        </button>
                    </div>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                        Get 25% off on yearly plan <span role="img" aria-label="fire">🔥</span>
                    </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`relative p-10 rounded-[2.5rem] flex flex-col text-left transition-all duration-300 ${plan.isPopular
                                ? 'bg-[#03060d] text-white shadow-2xl scale-[1.02]'
                                : 'bg-white text-gray-900 border border-gray-100'
                                }`}
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className={`text-base ${plan.isPopular ? 'text-gray-400' : 'text-gray-400'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-bold">
                                    ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                                </span>
                                <span className={`text-base ${plan.isPopular ? 'text-gray-500' : 'text-gray-400'}`}>
                                    /user/month
                                </span>
                            </div>

                            <div className={`h-px w-full mb-10 border-t border-dashed ${plan.isPopular ? 'border-gray-800' : 'border-gray-100'}`} />

                            <ul className="space-y-6 mb-12 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.isPopular ? 'bg-white text-black' : 'text-[#0095ff]'}`}>
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        <span className={`text-base font-medium ${plan.isPopular ? 'text-gray-300' : 'text-gray-500'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 bg-[#0095ff] text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20`}>
                                {plan.button}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
