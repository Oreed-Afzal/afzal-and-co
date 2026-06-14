import type { Metadata } from "next";
import { practiceAreas, site } from "@/lib/site";
import { Container } from "@/components/ui";
import { PageHero, MiniCTA } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PracticeCard } from "@/components/sections";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: `Explore the legal services offered by ${site.legalName} in Lahore — criminal, constitutional, family, civil, corporate and banking law.`,
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Practice Areas"
        subtitle="Comprehensive legal expertise across the areas that matter most. Whatever your matter, our team brings focused experience and a strategy built around you."
        crumb={[{ label: "Home", href: "/" }, { label: "Practice Areas" }]}
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 3) * 90}>
                <PracticeCard area={area} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <div className="pb-24">
        <MiniCTA />
      </div>
    </>
  );
}
