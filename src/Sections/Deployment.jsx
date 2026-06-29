import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import colors from "../Colors/Colors";
import { ClipboardList, Settings, Truck, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Site Analysis & Survey",
    desc: "We don't just drop a machine and leave. We begin with a 15-minute professional site survey to understand your space, foot traffic patterns, and power access. We analyze your specific demographic — whether it's high-end car buyers or 24/7 logistics staff — to determine the optimal machine configuration.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Tech Configuration & Curation",
    desc: "Once the hardware is selected, we move to the configuration phase. We build a custom product load-out based on your needs and program the AI-telemetry systems. Our IT background ensures that the LTE-autonomous network is tested and secure before it ever hits your floor.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Seamless Deployment",
    desc: "We handle the heavy lifting. Our deployment team manages the delivery, positioning, and initial stocking of your unit. Because our machines are 100% cashless and self-contained, there is zero integration required with your internal networks or Wi-Fi. We are Plug-and-Play.",
  },
  {
    icon: Activity,
    step: "04",
    title: "Proactive Management",
    desc: "This is where VendMac truly shines. We monitor your machine 24/7 via our AI-backend. We receive real-time alerts for low stock or technical status. You never have to call us to say a machine is empty; we already know, and a restocking route is already planned.",
  },
];

const Deployment = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const line = lineRef.current;
    if (line) {
      gsap.fromTo(line,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 1.6,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1.4,
          },
        }
      );
    }

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const isLeft = i % 2 === 0;
      gsap.fromTo(card,
        { opacity: 0, filter: "blur(10px)", x: isLeft ? -60 : 60 },
        {
          opacity: 1,
          filter: "blur(0px)",
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const headerTargets = el.querySelectorAll(".reveal-header");
    headerTargets.forEach((target, i) => {
      gsap.fromTo(target,
        { opacity: 0, filter: "blur(10px)", y: 30 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.8,
          delay: 0.1 * i,
          ease: "power3.out",
          scrollTrigger: {
            trigger: target,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="deployment"
      className="relative overflow-hidden font-sans py-14 sm:py-20"
      style={{ background: colors.primaryColor }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="reveal-header text-xs font-medium tracking-[0.2em] uppercase mb-4"
             style={{ color: `${colors.secondaryColor}99` }}>
            From Survey to Smart Retail
          </p>
          <h2 className="reveal-header text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]"
              style={{ color: colors.secondaryColor }}>
            Our{" "}
            <span style={{ color: colors.lightPrimary }}>Deployment</span>{" "}
            Process
          </h2>
          <p className="reveal-header mt-4 text-sm sm:text-base leading-relaxed"
               style={{ color: `${colors.secondaryColor}99` }}>
            From site survey to smart retail in 4 simple steps.
          </p>
        </div>

        <div className="relative">
          <div
            ref={lineRef}
            className="hidden lg:block absolute left-1/2 -translate-x-px top-0 w-0.5 h-full"
            style={{
              background: `linear-gradient(180deg, ${colors.lightPrimary}, ${colors.primaryColor})`,
            }}
          />

          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            const Icon = s.icon;

            return (
                <div
                  key={i}
                  className="group relative flex items-start py-4 lg:py-6"
                >
                  <div
                    className={`hidden lg:flex w-1/2 items-center ${isLeft ? "justify-end pr-10" : "justify-start pl-10 order-2"}`}
                  >
                    <div
                      ref={(el) => { cardRefs.current[i] = el; }}
                      className="w-full max-w-lg rounded-2xl p-5 sm:p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
                      style={{
                        background: `${colors.secondaryColor}0C`,
                        border: `1px solid ${colors.secondaryColor}15`,
                        textAlign: isLeft ? "right" : "left",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${colors.secondaryColor}18`;
                        e.currentTarget.style.borderColor = `${colors.lightPrimary}50`;
                        e.currentTarget.style.boxShadow = `0 8px 40px ${colors.darkText}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${colors.secondaryColor}0C`;
                        e.currentTarget.style.borderColor = `${colors.secondaryColor}15`;
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <h3 className="text-lg sm:text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-white"
                          style={{ color: colors.secondaryColor }}>
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed transition-colors duration-300"
                         style={{ color: `${colors.secondaryColor}AA` }}>
                        {s.desc}
                      </p>
                      <span
                        className="inline-block mt-3 text-[0.6rem] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-primaryColor"
                        style={{
                          background: `${colors.secondaryColor}12`,
                          color: colors.secondaryColor,
                        }}
                      >
                        Step {s.step}
                      </span>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(163,177,138,0.5)]"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primaryColor}, ${colors.lightPrimary})`,
                        color: colors.secondaryColor,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="hidden lg:block w-1/2" />

                  <div className="lg:hidden flex items-start gap-4 w-full">
                    <div
                      className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(163,177,138,0.5)]"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primaryColor}, ${colors.lightPrimary})`,
                        color: colors.secondaryColor,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div
                      className="flex-1 rounded-2xl p-5 transition-all duration-500"
                      style={{
                        background: `${colors.secondaryColor}0C`,
                        border: `1px solid ${colors.secondaryColor}15`,
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${colors.secondaryColor}18`;
                        e.currentTarget.style.borderColor = `${colors.lightPrimary}50`;
                        e.currentTarget.style.boxShadow = `0 8px 40px ${colors.darkText}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${colors.secondaryColor}0C`;
                        e.currentTarget.style.borderColor = `${colors.secondaryColor}15`;
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <h3 className="text-base font-bold mb-2 transition-colors duration-300 group-hover:text-white"
                          style={{ color: colors.secondaryColor }}>
                        {s.title}
                      </h3>
                      <p className="text-sm leading-relaxed"
                         style={{ color: `${colors.secondaryColor}AA` }}>
                        {s.desc}
                      </p>
                      <span
                        className="inline-block mt-2 text-[0.55rem] font-semibold tracking-wider uppercase px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-primaryColor"
                        style={{
                          background: `${colors.secondaryColor}12`,
                          color: colors.secondaryColor,
                        }}
                      >
                        Step {s.step}
                      </span>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>

      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: colors.lightPrimary }}
      />
    </section>
  );
};

export default Deployment;