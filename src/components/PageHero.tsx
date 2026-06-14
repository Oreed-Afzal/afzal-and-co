import Link from "next/link";
import { Container } from "@/components/ui";
import { Icon } from "@/components/Icons";

export function PageHero({
  title,
  subtitle,
  crumb,
}: {
  title: string;
  subtitle?: string;
  crumb: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-36 pb-16">
      {/* subtle pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
      <Container className="relative">
        <nav className="flex items-center gap-2 text-sm text-navy-200">
          {crumb.map((c, i) => (
            <span key={c.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-navy-400">/</span>}
              {c.href ? (
                <Link href={c.href} className="hover:text-gold-400">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gold-400">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-100">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}

export function MiniCTA() {
  return (
    <Container>
      <div className="my-4 flex flex-col items-center gap-4 rounded-2xl bg-gold-500 px-8 py-8 text-center shadow-lg sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-navy-900">
            Need legal advice you can trust?
          </h3>
          <p className="mt-1 text-navy-900/80">
            Book a free, confidential consultation with our team today.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          Get in Touch
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </Container>
  );
}
