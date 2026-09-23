import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  if (typeof window === "undefined") return;
  
  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) {
    mainEl.classList.add("main-active");
  }
  
  document.body.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const selectors = [".hero-eyebrow", ".hero-name-line", ".hero-role-styled", ".hero-role-primary"];
  const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
  if (elements.length > 0) {
    var landingText = new TextSplitter(elements, {
      type: "chars",
    });
    if (landingText.chars && landingText.chars.length > 0) {
      gsap.fromTo(
        landingText.chars,
        { opacity: 0, y: 40, filter: "blur(4px)" },
        {
          opacity: 1,
          duration: 1.0,
          filter: "blur(0px)",
          ease: "power3.out",
          y: 0,
          stagger: 0.02,
          delay: 0.2,
        }
      );
    }
  }

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
