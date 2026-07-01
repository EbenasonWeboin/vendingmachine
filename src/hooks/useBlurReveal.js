import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useBlurReveal = (selector = '.blur-reveal') => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const targets = el.querySelectorAll(selector);

    targets.forEach((target, i) => {
      gsap.fromTo(target,
        {
          opacity: 0,
          filter: 'blur(12px)',
          y: 40,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.3,
          delay: 0.05 * i,
          ease: 'expo.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: "play none none none"
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [selector]);

  return sectionRef;
};

export default useBlurReveal;