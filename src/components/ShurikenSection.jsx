import { useEffect, useRef } from "react";
import Shuriken from "../assets/shuriken.svg";
import "../styling/Shuriken.css";

function ShurikenSection() {
  const sectionRef = useRef(null);
  const shurikenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const shuriken = shurikenRef.current;
      if (!section || !shuriken) return;

      const rect = section.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      const opacity = Math.max(0, 1 - progress * 2);

      console.log("progress:", progress, "opacity:", opacity);

      shuriken.style.transform = `rotate(${progress * 720}deg)`;
      shuriken.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="shuriken-section" ref={sectionRef}>
      <div className="shuriken-wrapper">
        <img
          src={Shuriken}
          alt="shuriken"
          className="shuriken"
          ref={shurikenRef}
        />
      </div>
    </section>
  );
}

export default ShurikenSection;
