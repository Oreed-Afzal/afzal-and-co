import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icons = {
  scale: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3v18" />
      <path d="M7 21h10" />
      <path d="M5 7h14" />
      <path d="m5 7-3 6a3 3 0 0 0 6 0L5 7Z" />
      <path d="m19 7-3 6a3 3 0 0 0 6 0l-3-6Z" />
      <circle cx="12" cy="4" r="1.4" />
    </svg>
  ),
  shield: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  heart: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.5-9.5-9A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 9.5 5c-2.5 4.5-9.5 9-9.5 9Z" />
    </svg>
  ),
  gavel: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m13 9-6.5 6.5a2.1 2.1 0 0 1-3-3L10 6" />
      <path d="m9 5 5 5" />
      <path d="m14 4 6 6" />
      <path d="m15 5-2 2" />
      <path d="m19 9-2 2" />
      <path d="M11 21h9" />
    </svg>
  ),
  building: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      <path d="M10 21v-3h4v3" />
    </svg>
  ),
  bank: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m3 9 9-5 9 5" />
      <path d="M4 9h16v2H4z" />
      <path d="M6 11v7M10 11v7M14 11v7M18 11v7" />
      <path d="M3 20h18" />
    </svg>
  ),
  users: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.5" />
      <path d="M17 14a6 6 0 0 1 4 6" />
    </svg>
  ),
  clock: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  phone: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  mapPin: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  whatsapp: (p: IconProps) => (
    <svg {...base} {...p} strokeWidth={0} fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.12-2.9-6.99A9.82 9.82 0 0 0 12.04 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  ),
  arrowRight: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  check: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m5 12 5 5 9-11" />
    </svg>
  ),
  quote: (p: IconProps) => (
    <svg {...base} {...p} strokeWidth={0} fill="currentColor">
      <path d="M7.5 6C5 6 3 8 3 10.6c0 2.4 1.7 4.2 3.9 4.2.3 0 .6 0 .9-.1-.5 1.6-1.9 2.9-3.6 3.4l.6 1.9c3.2-.9 5.7-3.9 5.7-7.7V10C10.5 7.7 9.2 6 7.5 6Zm9 0C14 6 12 8 12 10.6c0 2.4 1.7 4.2 3.9 4.2.3 0 .6 0 .9-.1-.5 1.6-1.9 2.9-3.6 3.4l.6 1.9c3.2-.9 5.7-3.9 5.7-7.7V10C19.5 7.7 18.2 6 16.5 6Z" />
    </svg>
  ),
  star: (p: IconProps) => (
    <svg {...base} {...p} strokeWidth={0} fill="currentColor">
      <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.3l5.9-.9L12 3Z" />
    </svg>
  ),
  facebook: (p: IconProps) => (
    <svg {...base} {...p} strokeWidth={0} fill="currentColor">
      <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3v-1.5c0-.4.3-.5.5-.5Z" />
    </svg>
  ),
  linkedin: (p: IconProps) => (
    <svg {...base} {...p} strokeWidth={0} fill="currentColor">
      <path d="M6.94 8.5H4.06V21h2.88V8.5Zm.18-3.62A1.66 1.66 0 1 0 5.5 6.55a1.66 1.66 0 0 0 1.62-1.67ZM20 13.7c0-2.9-1.55-4.25-3.62-4.25-1.67 0-2.42.92-2.84 1.56V8.5H10.7c.04.85 0 12.5 0 12.5h2.84v-6.98c0-.25.02-.5.09-.68.2-.5.66-1.03 1.43-1.03 1 0 1.41.77 1.41 1.9V21H20v-7.3Z" />
    </svg>
  ),
  instagram: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  calendar: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  ),
} as const;

export type IconName = keyof typeof Icons;

export function Icon({
  name,
  ...props
}: { name: IconName } & IconProps) {
  const Cmp = Icons[name];
  return Cmp ? <Cmp {...props} /> : null;
}
