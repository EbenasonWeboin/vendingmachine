import colors from "../Colors/Colors";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden font-sans"
      style={{ background: colors.darkPrimary }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-2.5 sm:mb-3">
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${colors.primaryColor}, ${colors.lightPrimary})`,
                  color: colors.secondaryColor,
                }}
              >
                V
              </div>
              <span
                className="text-xs sm:text-sm font-bold tracking-tight"
                style={{ color: colors.secondaryColor }}
              >
                VendMac
              </span>
            </div>
            <p className="text-[0.6rem] sm:text-xs leading-relaxed"
               style={{ color: `${colors.secondaryColor}99` }}>
              Smart vending machines designed for modern spaces. Reliable,
              contactless, and always connected.
            </p>
          </div>

          <div>
            <h4 className="text-[0.6rem] sm:text-xs font-semibold mb-2 sm:mb-3"
                style={{ color: colors.secondaryColor }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2">
              {["Home", "Machines", "Technology", "Solutions", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[0.6rem] sm:text-xs transition-colors duration-200 hover:underline underline-offset-2"
                    style={{ color: `${colors.secondaryColor}99` }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.6rem] sm:text-xs font-semibold mb-2 sm:mb-3"
                style={{ color: colors.secondaryColor }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2">
              {[
                { icon: Mail, text: "hello@vendmac.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "San Francisco, CA" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-center gap-1.5 sm:gap-2 text-[0.6rem] sm:text-xs"
                      style={{ color: `${colors.secondaryColor}99` }}>
                    <Icon size={10} style={{ color: colors.lightPrimary }} />
                    <span className="truncate">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.6rem] sm:text-xs font-semibold mb-2 sm:mb-3"
                style={{ color: colors.secondaryColor }}>
              Industries
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2">
              {["Offices", "Schools", "Hospitals", "Gyms", "Hotels", "Retail"].map((item) => (
                <li key={item}>
                  <span className="text-[0.6rem] sm:text-xs"
                        style={{ color: `${colors.secondaryColor}99` }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-6 sm:mt-10 pt-3 sm:pt-4 text-center text-[0.5rem] sm:text-[0.6rem]"
          style={{
            borderTop: `1px solid ${colors.secondaryColor}12`,
            color: `${colors.secondaryColor}66`,
          }}
        >
          &copy; {new Date().getFullYear()} VendMac. All rights reserved.
        </div>
      </div>

      <div
        className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: colors.lightPrimary }}
      />
    </footer>
  );
};

export default Footer;
