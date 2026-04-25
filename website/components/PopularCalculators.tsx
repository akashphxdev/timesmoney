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

const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE = 1;
const AUTO_SLIDE_INTERVAL = 3000;

export default function PopularCalculators() {
    const [current, setCurrent] = useState(0);
    const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const router = useRouter();
    const maxSlide = categories.length - visibleCount;

    const goTo = useCallback(
        (idx: number) => {
            setCurrent(Math.max(0, Math.min(idx, maxSlide)));
        },
        [maxSlide]
    );

    const stopAuto = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
    }, []);

    const startAuto = useCallback(() => {
        stopAuto();
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
        }, AUTO_SLIDE_INTERVAL);
    }, [maxSlide, stopAuto]);

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(window.innerWidth < 640 ? VISIBLE_MOBILE : VISIBLE_DESKTOP);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

    const handleDot = (i: number) => {
        stopAuto();
        goTo(i);
        startAuto();
    };

    const handleCalculatorClick = (path: string) => {
        router.push(`/tools/${path}`);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <h2 className="text-3xl font-medium text-gray-900 mb-3">
                Popular calculators
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl mb-8 leading-relaxed">
                Discover our user-friendly calculators tailored to help you make
                informed financial decisions. Our diverse range of calculators
                ensures you find the perfect fit for your needs. Explore the options
                below to get started.
            </p>

            {/* Slider Wrapper */}
            <div
                className="overflow-hidden rounded-xl"
                onMouseEnter={stopAuto}
                onMouseLeave={startAuto}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(calc(-${current} * (100% / ${visibleCount} + 6px)))`,
                    }}
                >
                    {categories.map((cat) => (
                        <div
                            key={cat.title}
                            className={`
                flex-shrink-0 rounded-xl border border-gray-200 overflow-hidden bg-white
                mr-[18px]
                min-w-[calc(85%-12px)]
                sm:min-w-[calc(33.333%-12px)]
              `}
                        >
                            {/* Card Header with Image */}
                            <div
                                className={`${cat.bg} px-5 py-5 flex items-center justify-between min-h-[90px]`}
                            >
                                <h3
                                    className={`text-base font-medium ${cat.titleColor} whitespace-pre-line leading-snug`}
                                >
                                    {cat.title}
                                </h3>
                                <div className="relative w-20 h-20 flex-shrink-0">
                                    <Image
                                        src={cat.image}
                                        alt={cat.title.replace("\n", " ")}
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>
                            </div>

                            {/* Links */}
                            <div className="divide-y divide-gray-100">
                                {cat.links.map((link) => (
                                    <button
                                        key={link.label}
                                        onClick={() => handleCalculatorClick(link.path)}
                                        className={`w-full flex justify-between items-center px-5 py-3 text-sm hover:bg-gray-50 transition-colors text-left cursor-pointer ${
                                            link.highlight ? "text-blue-600" : "text-gray-800"
                                        }`}
                                    >
                                        {link.label}
                                        <span className="text-gray-400 text-base ml-2">→</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-3 mt-6">
                <button
                    onClick={handlePrev}
                    disabled={current === 0}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                >
                    ‹
                </button>

                {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                    <span
                        key={i}
                        onClick={() => handleDot(i)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-200 ${
                            i === current ? "bg-blue-600 scale-125" : "bg-gray-300"
                        }`}
                    />
                ))}

                <button
                    onClick={handleNext}
                    disabled={current === maxSlide}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                >
                    ›
                </button>
            </div>
        </section>
    );
}