"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
    {
        title: "Investment\ncalculators",
        bg: "bg-[#FFF0EC]",
        titleColor: "text-[#3C3489]",
        image: "https://static.pbcdn.in/cdn/images/home/investment-calc.svg",
        links: [
            { label: "SIP Calculator", path: "sip-calculator", highlight: true },
            { label: "FD Calculator", path: "fd-calculator" },
            { label: "RD Calculator", path: "rd-calculator" },
            { label: "Lumpsum Calculator", path: "lumpsum-calculator" },
        ],
    },
    {
        title: "Health & Wellness\ncalculators",
        bg: "bg-[#E1F5EE]",
        titleColor: "text-[#085041]",
        image: "https://static.pbcdn.in/cdn/images/home/telehealth.png",
        links: [
            { label: "EMI Calculator", path: "emi-calculator" },
            { label: "HRA Calculator", path: "hra-calculator" },
            { label: "Income Tax Calculator", path: "income-tax-calculator" },
            { label: "Monthly Saving Calculator", path: "monthly-saving-calculator" },
        ],
    },
    {
        title: "Term Insurance\ncalculators",
        bg: "bg-[#E6F1FB]",
        titleColor: "text-[#0C447C]",
        image: "https://static.pbcdn.in/cdn/images/home/term-life-calc.svg",
        links: [
            { label: "Step Up SIP Calculator", path: "step-up-sip-calculator" },
            { label: "SSY Calculator", path: "ssy-calculator" },
            { label: "NPS Calculator", path: "nps-calculator" },
            { label: "PPF Calculator", path: "ppf-calculator" },
        ],
    },
    {
        title: "Retirement\ncalculators",
        bg: "bg-[#FAEEDA]",
        titleColor: "text-[#633806]",
        image: "https://static.pbcdn.in/cdn/images/home/investment-calc.svg",
        links: [
            { label: "Retirement Calculator", path: "retirement-calculator" },
            { label: "EPF Calculator", path: "emi-calculator" },
            { label: "Gratuity Calculator", path: "gratuity-calculator" },
            { label: "NPS Calculator", path: "nps-calculator" },
        ],
    },
    {
        title: "Loan\ncalculators",
        bg: "bg-[#EEEDFE]",
        titleColor: "text-[#3C3489]",
        image: "https://static.pbcdn.in/cdn/images/home/term-life-calc.svg",
        links: [
            { label: "Home Loan EMI Calculator", path: "home-loan-emi-calculator" },
            { label: "Car Loan EMI Calculator", path: "car-loan-emi-calculator" },
            { label: "Personal Loan EMI Calculator", path: "personal-loan-emi-calculator" },
            { label: "Compound Interest Calculator", path: "compound-interest-calculator" },
        ],
    },
];

// Responsive breakpoints
const BREAKPOINTS = {
    MOBILE: 640,   // <640px: 1 card
    TABLET: 1024,  // 640px-1023px: 2 cards, >=1024px: 3 cards
};

const AUTO_SLIDE_INTERVAL = 3000;
const CARD_GAP = 18; // Gap in pixels between cards

export default function PopularCalculators() {
    const [current, setCurrent] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3); // Default to desktop (3 cards)
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    
    const maxSlide = Math.max(0, categories.length - visibleCount);

    const goTo = useCallback(
        (idx: number) => {
            setCurrent(Math.max(0, Math.min(idx, maxSlide)));
        },
        [maxSlide]
    );

    const stopAuto = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const startAuto = useCallback(() => {
        stopAuto();
        if (maxSlide > 0) {
            timerRef.current = setInterval(() => {
                setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
            }, AUTO_SLIDE_INTERVAL);
        }
    }, [maxSlide, stopAuto]);

    // Handle responsive visibility based on screen width
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < BREAKPOINTS.MOBILE) {
                setVisibleCount(1);
            } else if (width < BREAKPOINTS.TABLET) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };
        
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Reset current slide when visibleCount changes to prevent out-of-bounds
    useEffect(() => {
        setCurrent(0);
    }, [visibleCount]);

    // Auto-slide effect
    useEffect(() => {
        startAuto();
        return () => stopAuto();
    }, [startAuto, stopAuto]);

    const handlePrev = () => {
        stopAuto();
        goTo(current - 1);
        startAuto();
    };

    const handleNext = () => {
        stopAuto();
        goTo(current + 1);
        startAuto();
    };

    const handleDot = (index: number) => {
        stopAuto();
        goTo(index);
        startAuto();
    };

    const handleCalculatorClick = (path: string) => {
        router.push(`/tools/${path}`);
    };

    // Touch handlers for swipe functionality
    const handleTouchStart = (e: React.TouchEvent) => {
        stopAuto();
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) {
            // Swipe left -> next
            if (current < maxSlide) {
                goTo(current + 1);
            }
        } else if (touchEndX - touchStartX > 50) {
            // Swipe right -> prev
            if (current > 0) {
                goTo(current - 1);
            }
        }
        startAuto();
        setTouchStartX(0);
        setTouchEndX(0);
    };

    // Calculate transform value for slider
    const getTransformValue = () => {
        const cardWidth = 100 / visibleCount;
        return `translateX(-${current * cardWidth}%)`;
    };

    return (
        <section className="w-full bg-white py-8 sm:py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-2 sm:mb-3">
                        Popular calculators
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 max-w-2xl leading-relaxed">
                        Discover our user-friendly calculators tailored to help you make
                        informed financial decisions. Our diverse range of calculators
                        ensures you find the perfect fit for your needs. Explore the options
                        below to get started.
                    </p>
                </div>

                {/* Slider Container with swipe support */}
                <div
                    ref={containerRef}
                    className="overflow-hidden rounded-xl"
                    onMouseEnter={stopAuto}
                    onMouseLeave={startAuto}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ 
                            transform: getTransformValue(),
                            gap: `${CARD_GAP}px`
                        }}
                    >
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                                style={{ 
                                    width: `calc((100% - ${CARD_GAP * (visibleCount - 1)}px) / ${visibleCount})`
                                }}
                            >
                                {/* Card Header with Image */}
                                <div className={`${category.bg} px-4 sm:px-5 py-4 sm:py-5 flex items-center justify-between min-h-[80px] sm:min-h-[90px]`}>
                                    <h3 className={`text-sm sm:text-base font-medium ${category.titleColor} whitespace-pre-line leading-snug flex-1`}>
                                        {category.title}
                                    </h3>
                                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 ml-2 sm:ml-3">
                                        <Image
                                            src={category.image}
                                            alt={category.title.replace("\n", " ")}
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                </div>

                                {/* Links List */}
                                <div className="divide-y divide-gray-100">
                                    {category.links.map((link, linkIndex) => (
                                        <button
                                            key={linkIndex}
                                            onClick={() => handleCalculatorClick(link.path)}
                                            className={`w-full flex justify-between items-center px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm hover:bg-gray-50 transition-colors text-left cursor-pointer ${
                                                link.highlight ? "text-blue-600 font-medium" : "text-gray-700"
                                            }`}
                                        >
                                            <span className="truncate flex-1">{link.label}</span>
                                            <span className="text-gray-400 text-base sm:text-lg ml-2 flex-shrink-0 transition-transform group-hover:translate-x-0.5">→</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Controls - Only show if there's more than visibleCount items */}
                {categories.length > visibleCount && (
                    <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                        <button
                            onClick={handlePrev}
                            disabled={current === 0}
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent text-base sm:text-lg"
                            aria-label="Previous slide"
                        >
                            ‹
                        </button>

                        <div className="flex gap-1.5 sm:gap-2 mx-1 sm:mx-2">
                            {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleDot(idx)}
                                    className={`transition-all duration-200 cursor-pointer ${
                                        idx === current 
                                            ? "w-6 sm:w-7 h-1.5 sm:h-2 bg-blue-600 rounded-full" 
                                            : "w-4 sm:w-5 h-1.5 sm:h-2 bg-gray-300 rounded-full hover:bg-gray-400"
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={current === maxSlide}
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent text-base sm:text-lg"
                            aria-label="Next slide"
                        >
                            ›
                        </button>
                    </div>
                )}

                {/* Mobile Indicator for total items - only visible on small screens when pagination is not shown */}
                {categories.length > visibleCount && visibleCount === 1 && (
                    <div className="text-center mt-4 block sm:hidden">
                        <p className="text-xs text-gray-400">
                            {current + 1} of {categories.length}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}