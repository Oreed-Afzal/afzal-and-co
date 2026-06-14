import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, site } from "@/lib/site";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Legal Insights & Blog",
  description: `Practical legal guidance and insights from ${site.legalName} on criminal, family, civil and corporate law in Pakistan.`,
  alternates: { canonical: `${site.url}/blog` },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Legal Insights"
        subtitle="Plain-language guidance on the legal questions our clients ask most. Knowledge is the first step to protecting your rights."
        crumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-lg">
                  <Link href={`/blog/${post.slug}`} className="relative block h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">
                      {post.category}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Icon name="calendar" className="h-3.5 w-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="mt-3 font-serif text-xl font-semibold leading-snug text-navy-800 group-hover:text-gold-600">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600"
                    >
                      Read article
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
