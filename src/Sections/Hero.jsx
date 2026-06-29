import React, { useState, useEffect, useCallback } from "react";
import colors from "../Colors/Colors";
import BlueVM from "../assets/BlueVM.png";
import GreenVM from "../assets/GreenVM.png";
import PurpleVM from "../assets/PurpleVM.png";
import YellowVM from "../assets/YellowVM.png";
import { CreditCard, Clock, BarChart3, Leaf } from "lucide-react";

const vmImages = [
  { src: BlueVM, alt: "Blue Vending Machine" },
  { src: GreenVM, alt: "Green Vending Machine" },
  { src: PurpleVM, alt: "Purple Vending Machine" },
  { src: YellowVM, alt: "Yellow Vending Machine" },
];

const partners = [
  { initials: "HC", bg: "linear-gradient(135deg, #4a6741, #6b8f5e)" },
  { initials: "VF", bg: "linear-gradient(135deg, #8b6914, #c49a1c)" },
  { initials: "MX", bg: "linear-gradient(135deg, #2d5f7c, #3d8ab0)" },
  { initials: "RT", bg: "linear-gradient(135deg, #6b4c7c, #9268a8)" },
  { initials: "SN", bg: "linear-gradient(135deg, #7c4c4c, #a86868)" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % vmImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const goTo = (i) => setActiveIndex(i);

  const getSlideStyle = (i) => {
    const diff = (i - activeIndex + vmImages.length) % vmImages.length;
    const offset =
      diff === 0
        ? 0
        : diff === 1 || diff === vmImages.length - 1
          ? diff === 1
            ? 1
            : -1
          : diff < vmImages.length / 2
            ? diff
            : diff - vmImages.length;

    const abs = Math.abs(offset);
    const scale = abs === 0 ? 1 : 0.6;
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.5 : 0;
    const translateX = offset * 160;
    const zIndex = 10 - abs;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "absolute",
      pointerEvents: abs === 0 ? "none" : "auto",
      cursor: abs === 0 ? "default" : "pointer",
    };
  };

  return (
    <section
      className="relative overflow-hidden font-sans"
      style={{ background: colors.primaryColor }}
    >
      <div className="relative z-20 flex flex-col justify-center px-6 py-16 sm:px-10 lg:pl-16 lg:pr-[54%] lg:min-h-screen gap-5 lg:gap-6">
        <p className="animate-fadeInUp text-xs font-medium tracking-[0.2em] uppercase text-white/60">
          Cashless • Contactless • Fully Automatic
        </p>
        <h1
          className="animate-fadeInUp text-4xl sm:text-5xl lg:text-7xl max-w-2xl font-bold text-white leading-[1.08]"
          style={{ animationDelay: "0.1s" }}
        >
          <span style={{ color: colors.secondaryColor }}>Smart Vending</span>{" "}
          Machines For Modern Spaces.
        </h1>

        <div
          className="lg:hidden relative w-full flex justify-center my-4 sm:my-6 z-10 animate-fadeInUp"
          style={{ animationDelay: "0.15s" }}
        >
          <img
            src={vmImages[activeIndex].src}
            alt={vmImages[activeIndex].alt}
            className="animate-float h-[280px] sm:h-[360px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)] relative z-10"
          />
        </div>
        <p
          className="animate-fadeInUp max-w-lg leading-relaxed text-white/60 text-sm sm:text-base"
          style={{ animationDelay: "0.2s" }}
        >
          We provide intelligent vending solutions designed for offices,
          schools, malls, hospitals, and public spaces. Our machines combine
          modern technology with reliable service to deliver a seamless
          experience.
        </p>
        <button
          className="animate-fadeInUp group inline-flex items-center gap-2.5 bg-[#F8F6E8] text-[#2d3a1a] font-semibold text-sm py-3 px-7 rounded-full border-none cursor-pointer transition-all duration-300 w-fit hover:bg-white hover:-translate-y-0.5 hover:shadow-lg"
          style={{ animationDelay: "0.3s" }}
        >
          Explore Machines
          <svg
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </button>

        <div
          className="animate-fadeInUp flex items-center gap-4 mt-4 lg:mt-6"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex -space-x-2.5">
            {partners.map((p, i) => (
              <div
                key={i}
                className="animate-scaleIn w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-[0.6rem] sm:text-[0.65rem] text-white ring-2 ring-lime-800"
                style={{
                  background: p.bg,
                  zIndex: partners.length - i,
                  animationDelay: `${0.5 + i * 0.1}s`,
                }}
              >
                {p.initials}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-white/70 font-medium leading-tight">
              Trusted by 50+ brands
            </p>
            <p className="text-[0.68rem] text-white/40 leading-tight mt-0.5">
              Forward-thinking companies worldwide
            </p>
          </div>
        </div>
      </div>

      <div
        className="rightContainer relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 w-full lg:w-[60%] rounded-t-[2.5rem] lg:rounded-t-none lg:rounded-l-[2.5rem] z-[1] flex flex-col items-center justify-center gap-8 overflow-hidden"
        style={{ background: colors.secondaryColor }}
      >
        <div className="relative flex items-center justify-center w-[85%] h-[72vh] lg:h-[72vh]">
          <div className="relative w-full h-full">
            {vmImages.map((img, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                className="animate-float"
                style={{
                  position: "absolute",
                  inset: 0,
                  margin: "auto",
                  width: "65%",
                  height: "90%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...getSlideStyle(i),
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2.5 pb-4">
          {vmImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 28 : 8,
                height: 8,
                background:
                  i === activeIndex ? colors.darkPrimary : colors.lightPrimary,
                opacity: i === activeIndex ? 1 : 0.4,
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
