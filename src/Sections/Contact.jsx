import colors from "../Colors/Colors";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import useBlurReveal from "../hooks/useBlurReveal";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@vendmac.com", href: "mailto:hello@vendmac.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
];

const Contact = () => {
  const sectionRef = useBlurReveal();
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden font-sans py-20 sm:py-28"
      style={{ background: colors.secondaryColor }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="blur-reveal text-xs font-medium tracking-[0.2em] uppercase mb-4"
             style={{ color: colors.primaryColor }}>
            Get In Touch
          </p>
          <h2 className="blur-reveal text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]"
              style={{ color: colors.darkText }}>
            Let's Build Something{" "}
            <span style={{ color: colors.primaryColor }}>Together</span>
          </h2>
          <p className="blur-reveal mt-4 text-sm sm:text-base leading-relaxed"
               style={{ color: colors.lightPrimary }}>
            Ready to upgrade your space with smart vending? Reach out and
            we'll design a solution that fits you perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 max-w-5xl mx-auto">
          <div className="blur-reveal lg:col-span-2 flex flex-col gap-4 sm:gap-5">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: `${colors.primaryColor}08`,
                    border: `1px solid ${colors.primaryColor}15`,
                  }}
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: `${colors.primaryColor}15`,
                      color: colors.primaryColor,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.65rem] sm:text-xs font-medium truncate"
                       style={{ color: colors.lightPrimary }}>
                      {item.label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold truncate"
                       style={{ color: colors.darkText }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <form className="blur-reveal lg:col-span-3 flex flex-col gap-3 sm:gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm outline-none transition-all duration-200 focus:ring-2"
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
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm outline-none transition-all duration-200 focus:ring-2"
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
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm outline-none transition-all duration-200 focus:ring-2"
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
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm outline-none resize-none transition-all duration-200 focus:ring-2"
              style={{
                background: colors.secondaryColor,
                border: `1px solid ${colors.primaryColor}25`,
                color: colors.darkText,
                caretColor: colors.primaryColor,
              }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 w-fit"
              style={{
                background: colors.primaryColor,
                color: colors.secondaryColor,
              }}
            >
              <Send size={14} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;