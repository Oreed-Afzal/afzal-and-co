import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, site } from "@/lib/site";
import { Container } from "@/components/ui";
import { PageHero, MiniCTA } from "@/components/PageHero";
import { Icon } from "@/components/Icons";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${site.url}${post.image}`,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.legalName },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHero
        title={post.title}
        crumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category },
        ]}
      />

      <article className="py-20">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold text-gold-600">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="calendar" className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="prose prose-slate mt-10 max-w-none">
            {post.content.map((para, i) => (
              <p
                key={i}
                className="mb-5 text-[17px] leading-relaxed text-slate-700"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-cream p-6 text-sm text-slate-600">
            <strong className="text-navy-800">Disclaimer:</strong> This article
            is for general informational purposes only and does not constitute
            legal advice. For guidance on your specific situation, please{" "}
            <Link href="/contact" className="font-semibold text-gold-600">
              contact our team
            </Link>
            .
          </div>
        </Container>
      </article>

      {/* Related */}
      <section className="bg-cream py-20">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold text-navy-800">
            Related Articles
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group flex gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-gold-600">
                    {r.category}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold leading-snug text-navy-800 group-hover:text-gold-600">
                    {r.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <div className="py-16">
        <MiniCTA />
      </div>
    </>
  );
}
