"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Icon } from "@/components/Icons";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 shadow-lg shadow-navy-900/20 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-500 text-navy-900">
            <Icon name="scale" className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-white">
              {site.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold-400">
              {site.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-gold-400"
                    : "text-white/85 hover:text-gold-400"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="flex items-center gap-2 text-sm font-medium text-white/85 hover:text-gold-400"
          >
            <Icon name="phone" className="h-4 w-4" />
            {site.contact.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-navy-900/98 backdrop-blur transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-5 pb-6 pt-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded-md px-3 py-3 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-white/5 text-gold-400"
                    : "text-white/90 hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              className="block rounded-md bg-gold-500 px-3 py-3 text-center text-base font-semibold text-navy-900"
            >
              Free Consultation
            </Link>
          </li>
          <li>
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="flex items-center justify-center gap-2 px-3 py-3 text-base font-medium text-white/85"
            >
              <Icon name="phone" className="h-4 w-4" /> {site.contact.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
