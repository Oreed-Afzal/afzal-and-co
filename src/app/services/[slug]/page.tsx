import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPracticeArea,
  practiceAreas,
  site,
} from "@/lib/site";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Icon, type IconName } from "@/components/Icons";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: `${area.title} Lawyers in Lahore`,
    description: area.short,
    alternates: { canonical: `${site.url}/services/${area.slug}` },
    openGraph: {
      title: `${area.title} Lawyers in Lahore | ${site.name}`,
      description: area.short,
      images: [{ url: area.image }],
    },
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const others = practiceAreas.filter((p) => p.slug !== area.slug);

  return (
    <>
      <PageHero
        title={area.title}
        subtitle={area.short}
        crumb={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/services" },
          { label: area.title },
        ]}
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* Main content */}
          <div>
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={area.image}
                alt={area.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <h2 className="font-serif text-2xl font-semibold text-navy-800">
              Overview
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              {area.description}
            </p>

            <h2 className="mt-10 font-serif text-2xl font-semibold text-navy-800">
              How We Can Help
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {area.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-lg bg-cream p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-600">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-navy-800">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-navy-100 bg-navy-50/60 p-7">
              <h3 className="font-serif text-xl font-semibold text-navy-800">
                Why choose {site.name} for {area.title.toLowerCase()}?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Our team combines deep subject-matter knowledge with practical
                courtroom experience. We keep you informed at every stage,
                explain your options in plain language, and pursue the most
                effective path to resolution — whether through negotiation or
                determined litigation.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-navy-800 p-7 text-white">
              <h3 className="font-serif text-xl font-semibold">
                Other Practice Areas
              </h3>
              <ul className="mt-4 space-y-1">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/services/${o.slug}`}
                      className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-navy-100 transition-colors hover:bg-white/10"
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon
                          name={o.icon as IconName}
                          className="h-4 w-4 text-gold-400"
                        />
                        {o.title}
                      </span>
                      <Icon
                        name="arrowRight"
                        className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <ConsultationForm compact />
          </aside>
        </Container>
      </section>
    </>
  );
}
