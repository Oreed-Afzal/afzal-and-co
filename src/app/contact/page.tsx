import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Icon, type IconName } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.legalName} in Lahore. Call ${site.contact.phone} or book a free consultation online.`,
  alternates: { canonical: `${site.url}/contact` },
};

const { address } = site.contact;

const cards: {
  icon: IconName;
  title: string;
  lines: string[];
  href?: string;
}[] = [
  {
    icon: "mapPin",
    title: "Visit Our Office",
    lines: [address.line1],
  },
  {
    icon: "phone",
    title: "Call Us",
    lines: [site.contact.phone],
    href: `tel:${site.contact.phoneHref}`,
  },
  {
    icon: "mail",
    title: "Email Us",
    lines: [site.contact.email],
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: "clock",
    title: "Office Hours",
    lines: [site.contact.hours, "Sunday: Closed"],
  },
];

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.contact.mapQuery
  )}&output=embed`;

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="We are here to help. Reach out for a confidential, no-obligation consultation and let us understand how we can assist you."
        crumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Info cards */}
      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => {
              const body = (
                <>
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500/15 text-gold-600">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-navy-800">
                    {c.title}
                  </h3>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1 text-sm text-slate-600">
                      {l}
                    </p>
                  ))}
                </>
              );
              return c.href ? (
                <a
                  key={c.title}
                  href={c.href}
                  className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  {body}
                </a>
              ) : (
                <div
                  key={c.title}
                  className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-black/5"
                >
                  {body}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Form + map */}
      <section className="pb-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <ConsultationForm />
          <div className="overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
            <iframe
              title={`Map to ${site.name}`}
              src={mapSrc}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </>
  );
}
