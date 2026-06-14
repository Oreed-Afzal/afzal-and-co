import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local placeholder art is SVG; safe to optimize since we control it.
    // When you swap in real photos (JP/PNG/WebP) this stays fine.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
