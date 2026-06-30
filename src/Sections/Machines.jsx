import colors from "../Colors/Colors";
import BlueVM from "../assets/BlueVM.png";
import GreenVM from "../assets/GreenVM.png";
import PurpleVM from "../assets/PurpleVM.png";
import YellowVM from "../assets/YellowVM.png";
import { Cpu, Wifi, Coffee, ShoppingBag } from "lucide-react";
import useBlurReveal from "../hooks/useBlurReveal";

const machineCategories = [
  {
    title: "Snack & Beverage",
    desc: "Multi-slot machines with smart inventory tracking, touchscreen interface, and cashless payment for snacks, drinks, and confectionery.",
    image: BlueVM,
    features: ["Touchscreen UI", "Cashless Pay", "Inventory AI"],
  },
  {
    title: "Coffee & Hot Drinks",
    desc: "Premium bean-to-cup machines offering espresso, cappuccino, latte, and hot chocolate. Freshly brewed with real milk and high-quality beans.",
    image: GreenVM,
    features: ["Bean-to-Cup", "Real Milk", "15 Recipes"],
  },
  {
    title: "Healthy & Fresh Food",
    desc: "Refrigerated units for salads, sandwiches, fresh fruit, yogurt, and meal prep boxes. Ideal for health-conscious offices and gyms.",
    image: PurpleVM,
    features: ["Chilled Storage", "Fresh Daily", "Eco Packaging"],
  },
  {
    title: "Combination Units",
    desc: "All-in-one machines that combine snacks, drinks, and fresh food in a single compact unit. Maximize variety while minimizing floor space.",
    image: YellowVM,
    features: ["Multi-Temp Zones", "Space Saving", "All-in-One"],
  },
];

const Machines = () => {
  const sectionRef = useBlurReveal();
  return (
    <section
      ref={sectionRef}
      id="machines"
      className="relative overflow-hidden font-sans py-16 sm:py-20"
      style={{ background: colors.secondaryColor }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="blur-reveal text-[0.65rem] font-medium tracking-[0.2em] uppercase mb-3"
             style={{ color: colors.primaryColor }}>
            Our Fleet
          </p>
          <h2 className="blur-reveal text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1]"
              style={{ color: colors.darkText }}>
            Machines Built For{" "}
            <span style={{ color: colors.primaryColor }}>Every Space</span>
          </h2>
          <p className="blur-reveal mt-3 text-xs sm:text-sm leading-relaxed"
               style={{ color: colors.lightPrimary }}>
            From compact office units to high-capacity public installations
            — we have a vending solution that fits your environment perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 lg:gap-4">
          {machineCategories.map((cat, i) => (
            <div
              key={i}
              className="blur-reveal group rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1.5"
              style={{
                background: colors.secondaryColor,
                border: `1px solid ${colors.lightPrimary}33`,
                boxShadow: `0 4px 24px ${colors.darkText}0a, 0 1px 3px ${colors.darkText}08`,
              }}
            >
              <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden"
                   style={{ background: `linear-gradient(180deg, ${colors.primaryColor}15, ${colors.secondaryColor})` }}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-[65%] sm:h-[75%] w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 px-1.5 sm:px-2 py-0.5 rounded-full text-[0.45rem] sm:text-[0.5rem] font-semibold tracking-wide uppercase"
                     style={{
                       background: colors.primaryColor,
                       color: colors.secondaryColor,
                     }}>
                  Popular
                </div>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2 p-3 sm:p-4 flex-1">
                <h3 className="text-sm sm:text-base font-bold leading-snug"
                    style={{ color: colors.darkText }}>
                  {cat.title}
                </h3>
                <p className="text-[0.6rem] sm:text-[0.7rem] leading-relaxed flex-1"
                   style={{ color: colors.lightPrimary }}>
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {cat.features.map((feat, j) => (
                    <span
                      key={j}
                      className="text-[0.5rem] sm:text-[0.55rem] font-medium px-1.5 sm:px-2 py-0.5 rounded-full"
                      style={{
                        background: `${colors.primaryColor}12`,
                        color: colors.primaryColor,
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="blur-reveal mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 max-w-2xl mx-auto">
          {[
            { icon: Cpu, label: "Smart Sensors", desc: "Real-time inventory" },
            { icon: Wifi, label: "Always Connected", desc: "Remote monitoring" },
            { icon: Coffee, label: "Premium Quality", desc: "Top brands stocked" },
            { icon: ShoppingBag, label: "Easy Restock", desc: "Quick refill access" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="text-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                     style={{ background: `${colors.primaryColor}10` }}>
                  <Icon size={16} style={{ color: colors.primaryColor }} />
                </div>
                <p className="text-xs font-semibold" style={{ color: colors.darkText }}>
                  {item.label}
                </p>
                <p className="text-[0.6rem] mt-0.5" style={{ color: colors.lightPrimary }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="blur-reveal mt-12 text-center">
          <p className="text-[0.65rem] font-medium tracking-[0.15em] uppercase mb-3"
             style={{ color: colors.lightPrimary }}>
            Trusted across industries
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2.5">
            {["Offices", "Schools", "Hospitals", "Malls", "Gyms", "Hotels"].map((place) => (
              <span
                key={place}
                className="text-xs font-semibold"
                style={{ color: colors.darkText }}
              >
                {place}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: colors.primaryColor }}
      />
    </section>
  );
};

export default Machines;
