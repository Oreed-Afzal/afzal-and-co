import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/Icons";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`heading-accent ${center ? "center" : ""} mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            light ? "text-navy-100" : "text-slate-600"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  withArrow?: boolean;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-sm shadow-gold-500/20",
  secondary: "bg-navy-800 text-white hover:bg-navy-700",
  outline:
    "border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost: "text-navy-800 hover:text-gold-600",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = `group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {withArrow && (
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );
  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
