import { useState, useEffect, useCallback, useRef } from "react";
import gsap from "gsap";
import colors from "../Colors/Colors";
import BlueVM from "../assets/BlueVM.png";
import GreenVM from "../assets/GreenVM.png";
import PurpleVM from "../assets/PurpleVM.png";
import YellowVM from "../assets/YellowVM.png";
import useBlurReveal from "../hooks/useBlurReveal";
import { color } from "framer-motion";

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
  const sectionRef = useBlurReveal();
  const rightRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (rightRef.current) {
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 120, scale: 0.92 },
        {
          opacity: 1, x: 0, scale: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % vmImages.length);
    }, 3000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goTo = useCallback((i) => {
    setActiveIndex(i);
    startTimer();
  }, [startTimer]);

  const [slideOffset, setSlideOffset] = useState(120);

  useEffect(() => {
    const updateOffset = () => {
      setSlideOffset(window.innerWidth < 1024 ? 60 : 120);
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

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
    const translateX = offset * slideOffset;
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
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden font-sans"
      style={{ background: colors.primaryColor }}
    >
      <div className="relative z-20 flex flex-col justify-center px-5 sm:px-8 lg:pl-15 lg:pr-[52%] lg:min-h-screen gap-4 sm:gap-4 lg:gap-5 py-14 sm:py-16 lg:py-0">
        <p className="blur-reveal text-[0.4rem] sm:text-[0.55rem] lg:text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-white/80 w-fit">
          Cashless • Contactless • Fully Automatic
        </p>
        <h1
          className="blur-reveal text-[2.25rem] sm:text-4xl lg:text-7xl max-w-xl font-bold text-white/80 leading-[1.08]"
        >
          <span style={{ color: colors.secondaryColor }}>Smart Vending</span><br/>
          Machines For Modern Spaces.
        </h1>

        <p
          className="blur-reveal max-w-xl leading-relaxed text-white/50 text-[0.65rem] sm:text-xs lg:text-lg lg:font-light"
        >
          We provide intelligent vending solutions designed for offices,
          schools, malls, hospitals, and public spaces. Our machines combine
          modern technology with reliable service to deliver a seamless
          experience.
        </p>
        <a
          className="blur-reveal group inline-flex items-center gap-1.5 bg-[#F8F6E8] text-[#2d3a1a] font-semibold text-[0.6rem] sm:text-xs py-2 sm:py-2.5 px-5 sm:px-6 rounded-full border-none cursor-pointer transition-all duration-300 w-fit hover:bg-white hover:-translate-y-0.5 hover:shadow-lg"
          href="#machines"
        >
          Explore Machines
          <svg
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            width="14"
            height="14"
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
        </a>

        <div
          className="blur-reveal flex items-center gap-2 sm:gap-3 mt-6 lg:mt-5 flex-wrap"
        >
          <div className="flex -space-x-2 shrink-0">
            {partners.map((p, i) => (
              <div
                key={i}
                className="blur-reveal w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-[0.4rem] sm:text-[0.55rem] text-white ring-2 ring-lime-800"
                style={{
                  background: p.bg,
                  zIndex: partners.length - i,
                }}
              >
                {p.initials}
              </div>
            ))}
          </div>
          <div className="flex flex-col min-w-0">
            <p className="text-[0.55rem] lg:text-xs sm:text-[0.6rem] text-white/70 font-medium leading-tight">
              Trusted by 50+ brands
            </p>
            <p className="text-[0.45rem] lg:text-xs sm:text-[0.5rem] text-white/40 leading-tight mt-0.5">
              Forward-thinking companies worldwide
            </p>
          </div>
        </div>
      </div>

      <div
        ref={rightRef}
        style={{ opacity: 0, background: colors.secondaryColor }}
        className="rightContainer lg:absolute lg:right-0 lg:top-0 lg:bottom-0 w-full lg:w-[50%] rounded-t-[2rem] lg:rounded-t-none lg:rounded-l-[2rem] lg:z-30 z-[1] flex flex-col items-center justify-center gap-5 lg:gap-6 overflow-hidden px-5 lg:px-0"
      >
        <div className="relative flex items-center justify-center w-[80%] h-[50vh] sm:h-[50vh] lg:h-[65vh] max-h-[400px] sm:max-h-[420px] lg:max-h-none">
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
                  width: "80%",
                  height: "110%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...getSlideStyle(i),
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 pb-3">
          {vmImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 22 : 6,
                height: 6,
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
