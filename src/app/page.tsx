"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ValueProp from "@/components/ValueProp";
import Showcase from "@/components/Showcase";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <section id="features">
                <Features />
            </section>
            <ValueProp />
            <section id="showcase">
                <Showcase />
            </section>
            {/* <section id="integrations">
                <Integrations />
            </section>
            <section id="pricing">
                <Pricing />
            </section>
            <Testimonials /> */}
            <Footer />
        </main>
    );
}
