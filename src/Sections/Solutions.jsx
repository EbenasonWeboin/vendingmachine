import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import colors from "../Colors/Colors";
import { Building2, GraduationCap, Hospital, ShoppingBag, Dumbbell, Hotel, ChevronLeft, ChevronRight } from "lucide-react";
import useBlurReveal from "../hooks/useBlurReveal";

const solutions = [
  {
    icon: Building2,
    title: "Corporate Offices",
    desc: "Boost employee satisfaction with 24/7 access to quality snacks, fresh coffee, and healthy meals right in the break room.",
    highlights: ["Caffeine fix", "Healthy options", "Cashless"],
  },
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    desc: "Keep students fueled between classes with nutritious vending options, smart portion control, and cashless campus payments.",
    highlights: ["Nutritious picks", "Fast service", "Campus card"],
  },
  {
    icon: Hospital,
    title: "Hospitals & Clinics",
    desc: "Reliable round-the-clock provision for staff, patients, and visitors with hygienic, low-touch dispensing and remote monitoring.",
    highlights: ["Hygienic", "Low-touch", "24/7 support"],
  },
  {
    icon: ShoppingBag,
    title: "Retail & Malls",
    desc: "High-traffic machines built for durability and speed, with multi-payment support and real-time sales analytics.",
    highlights: ["High durability", "Fast checkout", "Analytics"],
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness",
    desc: "Post-workout refuel with protein shakes, electrolyte drinks, and healthy snacks in sleek, compact machines.",
    highlights: ["Protein drinks", "Sleek design", "Hydration"],
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    desc: "Quiet, premium machines for lobbies and lounges offering gourmet snacks, beverages, and contactless convenience.",
    highlights: ["Premium look", "Quiet mode", "Concierge"],
  },
];

const gap = 16;

const Solutions = () => {
  const sectionRef = useBlurReveal(".blur-reveal-header");
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);
  const maxIdx = solutions.length - 1;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerW = containerRef.current.offsetWidth;
        if (containerW < 640) {
          setCardWidth(Math.min(containerW - 40, 260));
        } else if (containerW < 1024) {
          setCardWidth(Math.min(containerW * 0.55, 300));
        } else {
          setCardWidth(300);
        }
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scrollTo = useCallback((idx) => {
    const target = idx * (cardWidth + gap);
    if (scrollRef.current) {
      gsap.to(scrollRef.current, {
        scrollLeft: target,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });
    }
    setActiveIdx(idx);
  }, [cardWidth]);

  const next = useCallback(() => {
    scrollTo(activeIdx >= maxIdx ? 0 : activeIdx + 1);
  }, [activeIdx, maxIdx, scrollTo]);

  const prev = useCallback(() => {
    scrollTo(activeIdx <= 0 ? maxIdx : activeIdx - 1);
  }, [activeIdx, maxIdx, scrollTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const onPointerDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: scrollRef.current.scrollLeft };
    scrollRef.current.style.cursor = "grabbing";
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onPointerUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      const idx = Math.round(scrollRef.current.scrollLeft / (cardWidth + gap));
      setActiveIdx(Math.min(idx, maxIdx));
    }
  };

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative overflow-hidden font-sans py-16 sm:py-20"
      style={{ background: colors.secondaryColor }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="blur-reveal-header text-[0.65rem] font-medium tracking-[0.2em] uppercase mb-3"
             style={{ color: colors.lightPrimary }}>
            Tailored For You
          </p>
          <h2 className="blur-reveal-header text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1]"
              style={{ color: colors.darkText }}>
            Solutions For{" "}
            <span style={{ color: colors.primaryColor }}>Every Industry</span>
          </h2>
          <p className="blur-reveal-header mt-3 text-xs sm:text-sm leading-relaxed"
               style={{ color: colors.lightPrimary }}>
            We tailor every installation to the unique needs of your space —
            from compact office setups to high-capacity public deployments.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          <button
            onClick={prev}
            className="absolute left-0 sm:-left-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: colors.secondaryColor,
              border: `1px solid ${colors.primaryColor}20`,
              boxShadow: `0 4px 16px ${colors.darkText}12`,
              color: colors.primaryColor,
            }}
          >
            <ChevronLeft size={14} />
          </button>

          <div
            ref={scrollRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="flex overflow-x-hidden cursor-grab select-none px-1"
            style={{ gap, scrollBehavior: "auto" }}
          >
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <div
                  key={i}
                  className="shrink-0 rounded-2xl p-4 sm:p-5 transition-all duration-500"
                  style={{
                    width: cardWidth,
                    background: colors.secondaryColor,
                    border: `1px solid ${colors.primaryColor}20`,
                    boxShadow: `0 2px 16px ${colors.darkText}08`,
                    opacity: i === activeIdx ? 1 : 0.55,
                    transform: i === activeIdx ? "scale(1)" : "scale(0.95)",
                    transition: "opacity 0.5s, transform 0.5s",
                  }}
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-2 sm:mb-3"
                    style={{
                      background: `${colors.primaryColor}12`,
                      color: colors.primaryColor,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold mb-1.5 sm:mb-2"
                      style={{ color: colors.darkText }}>
                    {sol.title}
                  </h3>
                  <p className="text-[0.6rem] sm:text-xs leading-relaxed mb-2 sm:mb-3"
                     style={{ color: colors.lightPrimary }}>
                    {sol.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {sol.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="text-[0.45rem] sm:text-[0.5rem] font-semibold tracking-wide uppercase px-1.5 sm:px-2 py-0.5 rounded-full"
                        style={{
                          background: `${colors.primaryColor}10`,
                          color: colors.primaryColor,
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={next}
            className="absolute right-0 sm:-right-1 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: colors.secondaryColor,
              border: `1px solid ${colors.primaryColor}20`,
              boxShadow: `0 4px 16px ${colors.darkText}12`,
              color: colors.primaryColor,
            }}
          >
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {solutions.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIdx ? 22 : 6,
                height: 6,
                background: i === activeIdx ? colors.primaryColor : colors.lightPrimary,
                opacity: i === activeIdx ? 1 : 0.4,
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>

      <div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: colors.primaryColor }}
      />
    </section>
  );
};

export default Solutions;
