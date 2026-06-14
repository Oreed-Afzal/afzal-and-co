import Image from "next/image";
import Link from "next/link";
import type { PracticeArea, Testimonial } from "@/lib/site";
import { Icon, type IconName } from "@/components/Icons";

export function PracticeCard({ area }: { area: PracticeArea }) {
  return (
    <Link
      href={`/services/${area.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={area.image}
          alt={area.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500 text-navy-900 shadow-md">
          <Icon name={area.icon as IconName} className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-navy-800 group-hover:text-gold-600">
          {area.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {area.short}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
          Learn more
          <Icon
            name="arrowRight"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-xl bg-white p-7 shadow-sm ring-1 ring-black/5">
      <Icon name="quote" className="h-8 w-8 text-gold-400" />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">
        “{t.quote}”
      </blockquote>
      <div className="mt-5 flex items-center gap-1 text-gold-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" className="h-4 w-4" />
        ))}
      </div>
      <figcaption className="mt-4 border-t border-slate-100 pt-4">
        <div className="font-semibold text-navy-800">{t.name}</div>
        <div className="text-sm text-slate-500">{t.role}</div>
      </figcaption>
    </figure>
  );
}

export function FeatureItem({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
        <Icon name={icon as IconName} className="h-6 w-6" />
      </span>
      <div>
        <h3 className="font-serif text-lg font-semibold text-navy-800">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
      </div>
    </div>
  );
}
