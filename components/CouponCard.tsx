"use client";

import { useState } from "react";

interface CouponProps {
    amount?: string;
    type?: "flat" | "amount";
    title: string;
    description: string;
    code?: string;
    isGiftCard?: boolean;
}

export default function CouponCard({
    amount,
    type,
    title,
    description,
    code,
    isGiftCard = false,
}: CouponProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex bg-[#FDF9F7]  overflow-hidden min-h-[140px]">
            {/* Left side (Orange Strip) */}
            <div
                className="w-[80px] bg-[#d97740] flex flex-col items-center justify-center text-white relative"
                style={{
                    maskImage: "radial-gradient(circle at right, transparent 4px, black 4.5px)",
                    WebkitMaskImage: "radial-gradient(circle at right, transparent 4px, black 4.5px)",
                    maskSize: "100% 8px",
                    WebkitMaskSize: "100% 8px",
                    maskRepeat: "repeat-y",
                    WebkitMaskRepeat: "repeat-y",
                }}
            >

                <div className="rotate-270 whitespace-nowrap font-bold text-lg tracking-wide transform -rotate-90">
                    {type === "flat" ? `Flat ${amount}` : amount}
                </div>
            </div>

            {/* Right side (Content) */}
            <div className="flex-1 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-[#4B4E4B] text-base">{title}</h3>
                    {!isGiftCard && (
                        <button
                            onClick={handleCopy}
                            className="text-[#d97740] font-bold text-xs flex items-center gap-1 hover:opacity-80 transition-opacity"
                        >
                            {copied ? (
                                <span className="text-green-600 text-lg">Copied!</span>
                            ) : (
                                <div className="flex items-center gap-1 text-[#874B2C] text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5" />
                                    </svg>
                                    Copy
                                </div>
                            )}
                        </button>
                    )}
                    {isGiftCard && (
                        <button
                            onClick={() => {
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                            }}
                            className="text-[#d97740] font-bold text-xs"
                        >
                            {copied ? <span className="text-green-600">Collected!</span> : "Collect"}
                        </button>
                    )}
                </div>

                <p className="text-gray-500 text-xs mt-2 leading-relaxed line-clamp-3">
                    {description}
                </p>

                <div className="mt-3">
                    <button className="text-gray-400 text-xs font-medium hover:text-gray-600">
                        Read more
                    </button>
                </div>
            </div>
        </div>
    );
}
