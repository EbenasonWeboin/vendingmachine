import colors from "../Colors/Colors";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden font-sans"
      style={{ background: colors.darkPrimary }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${colors.primaryColor}, ${colors.lightPrimary})`,
                  color: colors.secondaryColor,
                }}
              >
                V
              </div>
              <span
                className="text-sm sm:text-base font-bold tracking-tight"
                style={{ color: colors.secondaryColor }}
              >
                VendMac
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed"
               style={{ color: `${colors.secondaryColor}99` }}>
              Smart vending machines designed for modern spaces. Reliable,
              contactless, and always connected.
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
                style={{ color: colors.secondaryColor }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5">
              {["Home", "Machines", "Technology", "Solutions", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-xs sm:text-sm transition-colors duration-200 hover:underline underline-offset-2"
                    style={{ color: `${colors.secondaryColor}99` }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
                style={{ color: colors.secondaryColor }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {[
                { icon: Mail, text: "hello@vendmac.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "San Francisco, CA" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm"
                      style={{ color: `${colors.secondaryColor}99` }}>
                    <Icon size={12} style={{ color: colors.lightPrimary }} />
                    <span className="truncate">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
                style={{ color: colors.secondaryColor }}>
              Industries
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-2.5">
              {["Offices", "Schools", "Hospitals", "Gyms", "Hotels", "Retail"].map((item) => (
                <li key={item}>
                  <span className="text-xs sm:text-sm"
                        style={{ color: `${colors.secondaryColor}99` }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-8 sm:mt-12 pt-4 sm:pt-6 text-center text-[0.6rem] sm:text-xs"
          style={{
            borderTop: `1px solid ${colors.secondaryColor}12`,
            color: `${colors.secondaryColor}66`,
          }}
        >
          &copy; {new Date().getFullYear()} VendMac. All rights reserved.
        </div>
      </div>

      <div
        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: colors.lightPrimary }}
      />
    </footer>
  );
};

export default Footer;