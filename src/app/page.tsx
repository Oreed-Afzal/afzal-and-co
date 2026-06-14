import Image from "next/image";
import Link from "next/link";
import {
  practiceAreas,
  testimonials,
  whyChooseUs,
  site,
  blogPosts,
} from "@/lib/site";
import { Container, SectionHeading, Button, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/Stats";
import { ConsultationForm } from "@/components/ConsultationForm";
import { PracticeCard, TestimonialCard } from "@/components/sections";
import { Icon } from "@/components/Icons";

const valueProps = [
  {
    icon: "scale",
    title: "Experienced",
    text: "Decades of courtroom advocacy across every tier of the judiciary.",
  },
  {
    icon: "shield",
    title: "Trusted",
    text: "Discreet, ethical counsel that puts your interests first.",
  },
  {
    icon: "users",
    title: "Here for You",
    text: "Personalised support and clear guidance at every step.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src="/images/hero.svg"
          alt={`${site.name} — lawyers in Lahore`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
        <Container className="relative py-32">
          <div className="max-w-2xl">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-400 backdrop-blur">
              <Icon name="mapPin" className="h-3.5 w-3.5" /> Based in Lahore,
              Pakistan
            </span>
            <h1 className="animate-fade-up mt-6 font-serif text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Trusted Legal Counsel,{" "}
              <span className="text-gold-400">When It Matters Most</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
              {site.name} is a full-service law firm delivering strategic,
              results-driven representation in criminal, civil, family,
              corporate and constitutional matters across Pakistan.
            </p>
            <div className="animate-fade-up mt-9 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" withArrow>
                Get a Free Consultation
              </Button>
              <Button href="/services" variant="outline">
                Our Practice Areas
              </Button>
            </div>
            <div className="animate-fade-up mt-10 flex items-center gap-6 text-sm text-navy-100">
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="flex items-center gap-2 hover:text-gold-400"
              >
                <Icon name="phone" className="h-5 w-5 text-gold-400" />
                {site.contact.phone}
              </a>
              <span className="hidden items-center gap-2 sm:flex">
                <Icon name="clock" className="h-5 w-5 text-gold-400" />
                {site.contact.hours}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Value props */}
      <section className="relative z-10 -mt-16">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-slate-200 shadow-xl sm:grid-cols-3">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500/15 text-gold-600">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-navy-800">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* About preview */}
      <section className="py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/about-office.svg"
                alt="Our offices in Lahore"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-navy-800 px-7 py-5 text-white shadow-xl sm:block lg:-right-6">
              <div className="font-serif text-3xl font-bold text-gold-400">
                {new Date().getFullYear() - site.foundedYear}+
              </div>
              <div className="text-xs uppercase tracking-wide text-navy-100">
                Years of Practice
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About the Firm"
              title="A Legacy of Integrity and Advocacy in Lahore"
              intro={`${site.legalName} is a full-service law firm built on a simple promise: principled advice, diligent preparation, and tireless advocacy. We represent individuals, families and businesses with the same dedication, whatever the size of the matter.`}
            />
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Expertise across multiple practice areas",
                "Client-centred, transparent approach",
                "Strong record before all courts",
                "Confidential and ethical representation",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/about" variant="secondary" withArrow>
                More About Us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Practice areas */}
      <section className="bg-cream py-24">
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="Practice Areas"
              title="Comprehensive Legal Services"
              intro="From the courtroom to the boardroom, our team offers seasoned counsel across the areas of law that matter most to our clients."
            />
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 3) * 90}>
                <PracticeCard area={area} />
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
              <SectionHeading
                light
                eyebrow="Why Choose Us"
                title="The Difference Experience Makes"
                intro="Choosing the right lawyer can change the course of your matter. Here is what sets our firm apart."
              />
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

      {/* Testimonials */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              center
              eyebrow="Client Testimonials"
              title="What Our Clients Say"
              intro="The trust of our clients is our greatest achievement and the foundation of our practice."
            />
          </Reveal>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest insights */}
      <section className="bg-cream py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <SectionHeading eyebrow="Legal Insights" title="From Our Blog" />
            </Reveal>
            <Reveal delay={100}>
              <Button href="/blog" variant="ghost" withArrow>
                View all articles
              </Button>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-navy-800 group-hover:text-gold-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 text-xs text-slate-400">
                      {post.readingTime}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA + consultation form */}
      <section className="relative overflow-hidden bg-navy-900 py-24">
        <Image
          src="/images/cta.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <Container className="relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>Free Consultation</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Let&apos;s Discuss How We Can Help You
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-navy-100">
              Every case begins with a conversation. Reach out today for a
              confidential, no-obligation consultation and let our experience
              work for you.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="flex items-center gap-3 text-white hover:text-gold-400"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                  <Icon name="phone" className="h-5 w-5 text-gold-400" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-navy-200">
                    Call us
                  </span>
                  <span className="font-semibold">{site.contact.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-3 text-white hover:text-gold-400"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                  <Icon name="mail" className="h-5 w-5 text-gold-400" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-navy-200">
                    Email us
                  </span>
                  <span className="font-semibold">{site.contact.email}</span>
                </span>
              </a>
            </div>
          </div>
          <Reveal delay={120}>
            <ConsultationForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
