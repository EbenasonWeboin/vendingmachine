import { useColors } from "../context/ThemeContext";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import useBlurReveal from "../hooks/useBlurReveal";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@vendmac.com", href: "mailto:hello@vendmac.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
];

const Contact = () => {
  const colors = useColors();
  const sectionRef = useBlurReveal();
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden font-sans py-16 sm:py-20"
      style={{ background: colors.secondaryColor }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="blur-reveal text-[0.65rem] font-medium tracking-[0.2em] uppercase mb-3"
             style={{ color: colors.primaryColor }}>
            Get In Touch
          </p>
          <h2 className="blur-reveal text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1]"
              style={{ color: colors.darkText }}>
            Let's Build Something{" "}
            <span style={{ color: colors.primaryColor }}>Together</span>
          </h2>
          <p className="blur-reveal mt-3 text-xs sm:text-sm leading-relaxed"
               style={{ color: colors.lightPrimary }}>
            Ready to upgrade your space with smart vending? Reach out and
            we'll design a solution that fits you perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="blur-reveal lg:col-span-2 flex flex-col gap-3 sm:gap-4">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: `${colors.primaryColor}08`,
                    border: `1px solid ${colors.primaryColor}15`,
                  }}
                >
                  <div
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: `${colors.primaryColor}15`,
                      color: colors.primaryColor,
                    }}
                  >
                    <Icon size={14} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.55rem] sm:text-[0.65rem] font-medium truncate"
                       style={{ color: colors.lightPrimary }}>
                      {item.label}
                    </p>
                    <p className="text-[0.6rem] sm:text-xs font-semibold truncate"
                       style={{ color: colors.darkText }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <form className="blur-reveal lg:col-span-3 flex flex-col gap-2 sm:gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl text-[0.6rem] sm:text-xs outline-none transition-all duration-200 focus:ring-2"
                style={{
                  background: colors.secondaryColor,
                  border: `1px solid ${colors.primaryColor}25`,
                  color: colors.darkText,
                  caretColor: colors.primaryColor,
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl text-[0.6rem] sm:text-xs outline-none transition-all duration-200 focus:ring-2"
                style={{
                  background: colors.secondaryColor,
                  border: `1px solid ${colors.primaryColor}25`,
                  color: colors.darkText,
                  caretColor: colors.primaryColor,
                }}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl text-[0.6rem] sm:text-xs outline-none transition-all duration-200 focus:ring-2"
              style={{
                background: colors.secondaryColor,
                border: `1px solid ${colors.primaryColor}25`,
                color: colors.darkText,
                caretColor: colors.primaryColor,
              }}
            />
            <textarea
              rows={4}
              placeholder="Tell us about your space..."
              className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl text-[0.6rem] sm:text-xs outline-none resize-none transition-all duration-200 focus:ring-2"
              style={{
                background: colors.secondaryColor,
                border: `1px solid ${colors.primaryColor}25`,
                color: colors.darkText,
                caretColor: colors.primaryColor,
              }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[0.6rem] sm:text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 w-fit"
              style={{
                background: colors.primaryColor,
                color: colors.secondaryColor,
              }}
            >
              <Send size={12} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
