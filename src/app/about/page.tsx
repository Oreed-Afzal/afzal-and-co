import type { Metadata } from "next";
import Image from "next/image";
import { site, whyChooseUs } from "@/lib/site";
import { Container, SectionHeading, Eyebrow } from "@/components/ui";
import { PageHero, MiniCTA } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/Stats";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.legalName}, a full-service law firm in Lahore with decades of experience delivering principled, results-driven legal representation.`,
  alternates: { canonical: `${site.url}/about` },
};

const values = [
  {
    icon: "shield",
    title: "Integrity",
    text: "We act with honesty and transparency, offering candid advice even when it is not what a client hopes to hear.",
  },
  {
    icon: "scale",
    title: "Excellence",
    text: "Meticulous preparation and command of the law underpin everything we do, in and out of court.",
  },
  {
    icon: "users",
    title: "Client First",
    text: "Your goals drive our strategy. We listen carefully and tailor our approach to your circumstances.",
  },
  {
    icon: "heart",
    title: "Commitment",
    text: "We are dedicated to our community and to securing the best possible outcome for every client.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${site.name}`}
        subtitle="A full-service law firm in Lahore, built on integrity, expertise and an unwavering commitment to our clients."
        crumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/afzal-a-haider.png"
                alt={`${site.founderName}, founder of ${site.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Our Story"
              title="Decades of Dedicated Legal Service"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600">
              <p>
                Founded in {site.foundedYear}, {site.legalName} has grown into a
                respected full-service law firm serving individuals, families
                and businesses across Lahore and beyond. What began as a
                single-minded commitment to justice has become a practice
                trusted by thousands of clients.
              </p>
              <p>
                Our founder, {site.founderName}, built this firm on the belief
                that every client deserves diligent preparation, honest counsel
                and fearless advocacy — regardless of the size or complexity of
                their matter. That philosophy continues to guide us today.
              </p>
              <p>
                From sensitive family disputes to high-stakes criminal defence,
                complex commercial litigation and constitutional matters, we
                bring the same rigour, discretion and determination to every
                brief we accept.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["30+", "Years"],
                ["2,500+", "Cases"],
                ["95%", "Success"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-xl bg-navy-50 px-4 py-5 text-center"
                >
                  <div className="font-serif text-2xl font-bold text-navy-800">
                    {n}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-slate-500">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="bg-cream py-24">
        <Container className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-white p-9 shadow-sm ring-1 ring-black/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500 text-navy-900">
                <Icon name="scale" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-navy-800">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                To provide accessible, high-quality legal services that protect
                our clients&apos; rights and interests, delivered with integrity,
                diligence and genuine care for the people we represent.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-2xl bg-white p-9 shadow-sm ring-1 ring-black/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-gold-400">
                <Icon name="shield" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-navy-800">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                To be recognised as one of Lahore&apos;s most trusted law firms —
                known not only for the results we achieve, but for the
                principled, client-centred manner in which we achieve them.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="Our Values"
              title="The Principles That Guide Us"
            />
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-xl bg-white p-7 text-center shadow-sm ring-1 ring-black/5">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                    <Icon name={v.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-navy-800">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose us + stats */}
      <section className="bg-navy-800 py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Why Clients Choose Us</Eyebrow>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Experience You Can Rely On
              </h2>
              <p className="mt-5 leading-relaxed text-navy-100">
                Our reputation has been earned one case at a time, through
                consistent results and genuine dedication to our clients&apos;
                wellbeing.
              </p>
            </Reveal>
            <div className="grid gap-7 sm:grid-cols-2">
              {whyChooseUs.map((f, i) => (
                <Reveal key={f.title} delay={(i % 2) * 100}>
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-400">
                      <Icon name={f.icon as never} className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-white">
                        {f.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-100">
                        {f.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-14">
            <Stats />
          </div>
        </Container>
      </section>

      <div className="py-16">
        <MiniCTA />
      </div>
    </>
  );
}
