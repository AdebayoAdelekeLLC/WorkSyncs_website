import React from 'react';
import { footerBg } from '@/images';
import Image from 'next/image';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div
            style={{
                background: `url(${footerBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="relative flex flex-col py-10 px-6 md:px-14 gap-6 overflow-hidden"
        >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <h1 className="text-3xl md:text-6xl font-bold text-white">
                    Grow your business fast <br className="hidden md:block" /> with WorkSyncs.
                </h1>
                <a
                    href="https://app.worksyncs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-8 rounded-md w-full md:max-w-[250px] bg-white py-3 text-[#000D25] hover:bg-[#0097FE] hover:text-white font-bold transition-colors text-center"
                >
                    Try WorkSyncs for Free
                </a>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
                <Image
                    src="/ws-logo.svg"
                    alt="WorkSyncs Logo"
                    width={150}
                    height={100}
                />
                <div className="flex items-center gap-6">
                    <Twitter className="text-white cursor-pointer hover:text-[#0097FE] transition-colors" />
                    <Facebook className="text-white cursor-pointer hover:text-[#0097FE] transition-colors" />
                    <Instagram className="text-white cursor-pointer hover:text-[#0097FE] transition-colors" />
                    <Linkedin className="text-white cursor-pointer hover:text-[#0097FE] transition-colors" />
                </div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mt-5 border-t border-[#F7F7F9] pt-6 gap-4 text-center">
                <p className="text-white text-sm">
                    © {new Date().getFullYear()} WorkSyncs. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <a href="#" className="text-white text-sm hover:text-[#0097FE] transition-colors">
                        Privacy Policy
                    </a>
                    <span className="text-white/20 text-sm hidden md:block">|</span>
                    <a href="#" className="text-white text-sm hover:text-[#0097FE] transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
