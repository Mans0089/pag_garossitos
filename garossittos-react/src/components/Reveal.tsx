import type { ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export default function Reveal({ children, as: Tag = "div", className = "" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
