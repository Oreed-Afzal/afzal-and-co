import Link from "next/link";
import { nav, practiceAreas, site } from "@/lib/site";
import { Container } from "@/components/ui";
import { Icon, type IconName } from "@/components/Icons";

const socials: { name: IconName; href: string; label: string }[] = [
  { name: "facebook", href: site.social.facebook, label: "Facebook" },
  { name: "linkedin", href: site.social.linkedin, label: "LinkedIn" },
  { name: "instagram", href: site.social.instagram, label: "Instagram" },
];

export function Footer() {
  const { address } = site.contact;
  return (
    <footer className="bg-navy-900 text-navy-100">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-500 text-navy-900">
              <Icon name="scale" className="h-6 w-6" />
            </span>
            <span className="font-serif text-lg font-semibold text-white">
              {site.name}
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-navy-200">
            {site.legalName} — trusted legal counsel in Lahore across criminal,
            civil, family, corporate and constitutional matters.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold-500 hover:text-navy-900"
              >
                <Icon name={s.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-navy-200 transition-colors hover:text-gold-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-white">
            Practice Areas
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {practiceAreas.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/services/${p.slug}`}
                  className="text-navy-200 transition-colors hover:text-gold-400"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-white">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span className="text-navy-200">
                {address.line1}
              </span>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="flex gap-3 text-navy-200 transition-colors hover:text-gold-400"
              >
                <Icon name="phone" className="h-4 w-4 shrink-0 text-gold-400" />
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex gap-3 text-navy-200 transition-colors hover:text-gold-400"
              >
                <Icon name="mail" className="h-4 w-4 shrink-0 text-gold-400" />
                {site.contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span className="text-navy-200">{site.contact.hours}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-300 sm:flex-row">
          <p>
            © 2026 {site.legalName}. All rights reserved.
          </p>
          <p>
            Disclaimer: The content on this website is for general information
            only and does not constitute legal advice.
          </p>
        </Container>
      </div>
    </footer>
  );
}
