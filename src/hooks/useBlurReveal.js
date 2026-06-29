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
          duration: 0.9,
          delay: 0.12 * i,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 88%',
            toggleActions: 'play none none none',
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