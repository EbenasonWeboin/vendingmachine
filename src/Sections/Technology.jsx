import colors from "../Colors/Colors";
import { Cpu, Wifi, Smartphone, Shield, RefreshCw, BarChart3 } from "lucide-react";
import useBlurReveal from "../hooks/useBlurReveal";

const techFeatures = [
  {
    icon: Cpu,
    title: "AI-Powered Inventory",
    desc: "Real-time stock tracking with predictive restocking alerts so your machines are always full and never out of best-sellers.",
  },
  {
    icon: Wifi,
    title: "IoT Connectivity",
    desc: "Every machine is cloud-connected for remote diagnostics, performance monitoring, and instant over-the-air firmware updates.",
  },
  {
    icon: Smartphone,
    title: "Cashless Payments",
    desc: "Tap, scan, or dip — supporting NFC, Apple Pay, Google Pay, credit cards, and QR-code wallets for a frictionless experience.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    desc: "End-to-end encrypted transactions with PCI-compliant payment processing and tamper-proof hardware security modules.",
  },
  {
    icon: RefreshCw,
    title: "Auto Replenishment",
    desc: "Smart supply-chain integration that triggers automatic restocking when inventory drops below configured thresholds.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Comprehensive sales data, customer insights, and performance metrics accessible from any device via a sleek web dashboard.",
  },
];

const spanMap = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7", "lg:col-span-6", "lg:col-span-6"];

const Technology = () => {
  const sectionRef = useBlurReveal();
  return (
    <section
      ref={sectionRef}
      id="technology"
      className="relative overflow-hidden font-sans py-16 sm:py-20"
      style={{ background: colors.primaryColor }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="blur-reveal text-[0.65rem] font-medium tracking-[0.2em] uppercase mb-3"
             style={{ color: `${colors.secondaryColor}99` }}>
            Built Different
          </p>
          <h2 className="blur-reveal text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1]"
              style={{ color: colors.secondaryColor }}>
            Technology That{" "}
            <span style={{ color: colors.lightPrimary }}>Just Works</span>
          </h2>
          <p className="blur-reveal mt-3 text-xs sm:text-sm leading-relaxed"
               style={{ color: `${colors.secondaryColor}99` }}>
            Every machine ships with a purpose-built tech stack designed for
            reliability, security, and real-time intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {techFeatures.map((feat, i) => {
            const Icon = feat.icon;
            const wide = spanMap[i] === "lg:col-span-7";
            return (
              <div
                key={i}
                className={`blur-reveal group rounded-2xl p-4 sm:p-5 transition-all duration-500 hover:-translate-y-1 ${spanMap[i]}`}
                style={{
                  background: `${colors.secondaryColor}08`,
                  border: `1px solid ${colors.secondaryColor}15`,
                }}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-2 sm:mb-3 transition-colors duration-300 group-hover:scale-110"
                  style={{
                    background: `${colors.lightPrimary}20`,
                    color: colors.lightPrimary,
                  }}
                >
                  <Icon size={18} />
                </div>
                <h3 className={`font-bold mb-1.5 ${wide ? "text-base sm:text-lg" : "text-xs sm:text-sm"}`}
                    style={{ color: colors.secondaryColor }}>
                  {feat.title}
                </h3>
                <p className={`leading-relaxed ${wide ? "text-[0.65rem] sm:text-xs" : "text-[0.6rem] sm:text-[0.65rem]"}`}
                   style={{ color: `${colors.secondaryColor}99` }}>
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="blur-reveal mt-10 sm:mt-12 text-center">
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 sm:px-5 py-3 rounded-xl"
            style={{
              background: `${colors.secondaryColor}08`,
              border: `1px solid ${colors.secondaryColor}12`,
            }}
          >
            <span className="flex -space-x-1.5 shrink-0">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold text-[0.4rem] sm:text-[0.45rem] ring-2"
                  style={{
                    background: `${colors.lightPrimary}30`,
                    color: colors.secondaryColor,
                    borderColor: colors.primaryColor,
                  }}
                >
                  {["A","P","I",""][n - 1] || ""}
                </div>
              ))}
            </span>
            <span className="text-[0.6rem] sm:text-xs font-medium text-center sm:text-left"
                  style={{ color: `${colors.secondaryColor}CC` }}>
              Seamless integration with your existing infrastructure
            </span>
          </div>
        </div>
      </div>

      <div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: colors.secondaryColor }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: colors.lightPrimary }}
      />
    </section>
  );
};

export default Technology;
