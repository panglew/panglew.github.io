"use client";
import { useState, useRef } from "react";
import Icon from "../server/icon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface DropdownProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

export default function Dropdown({ icon, title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleAnim, setVisibleAnim] = useState<gsap.core.Timeline | null>(null);

  const dropdown = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const arrow = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(content.current, { height: 0, opacity: 0 });

      let tl = gsap.timeline({ paused: true });
      tl.to(content.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        onStart: () => setIsOpen(true),
        onReverseComplete: () => setIsOpen(false),
      });
      tl.to(
        arrow.current,
        { rotate: 180, duration: 0.5, ease: "power3.out" },
        0
      );
      setVisibleAnim(tl);
    },
    { scope: dropdown }
  );

  const toggle = contextSafe(() => {
    if (isOpen) {
      visibleAnim?.timeScale(1).reverse();
    } else {
      visibleAnim?.play();
    }
  });

  return (
    <div ref={dropdown}>
      <button
        type="button"
        onClick={toggle}
        className="hover:text-blue-500 flex flex-row items-center gap-2"
      >
        <div ref={arrow}>
          <Icon name="caret_up" />
        </div>
        <span className="text-base font-medium">{title}</span>
        <Icon name={icon} />
      </button>
      <div ref={content} className="overflow-hidden">
        <div className="flex flex-col ml-6 my-2 items-left">
          {children}
        </div>
      </div>
    </div>
  );
}