"use client";

import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;

    let hover = false;
    const cursor = cursorRef.current!;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power2.out" });

    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };
    document.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;
    function loop() {
      if (!hover && cursor) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        xTo(cursorPos.x);
        yTo(cursorPos.y);
      }
      animationFrameId = requestAnimationFrame(loop);
    }
    animationFrameId = requestAnimationFrame(loop);

    const cursorElements = document.querySelectorAll("[data-cursor]");
    const handlers: { elem: HTMLElement; over: (e: MouseEvent) => void; out: () => void }[] = [];

    cursorElements.forEach((item) => {
      const element = item as HTMLElement;
      const overHandler = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");
          xTo(rect.left);
          yTo(rect.top);
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      };

      const outHandler = () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      };

      element.addEventListener("mouseover", overHandler);
      element.addEventListener("mouseout", outHandler);
      handlers.push({ elem: element, over: overHandler, out: outHandler });
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      handlers.forEach(({ elem, over, out }) => {
        elem.removeEventListener("mouseover", over);
        elem.removeEventListener("mouseout", out);
      });
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
