"use client";

import { useState, type FormEvent } from "react";
import { practiceAreas, site } from "@/lib/site";
import { Icon } from "@/components/Icons";

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // No backend yet — simulate submission. Replace with a real API route or
    // email/CRM integration (e.g. /api/contact) when ready.
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Consultation request — ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nMatter: ${data.get("area")}\n\n${data.get("message")}`
    );
    // Open the user's mail client as a graceful fallback.
    window.setTimeout(() => {
      setStatus("sent");
      window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    }, 600);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-8 text-center shadow-lg ring-1 ring-black/5">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="font-serif text-xl font-semibold text-navy-800">
          Thank you!
        </h3>
        <p className="text-sm text-slate-600">
          Your request has been prepared. Our team will get back to you shortly.
          For urgent matters, please call{" "}
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="font-semibold text-gold-600"
          >
            {site.contact.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-navy-800 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30 placeholder:text-slate-400";

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-xl bg-white p-6 shadow-lg ring-1 ring-black/5 sm:p-8 ${
        compact ? "" : ""
      }`}
    >
      <h3 className="font-serif text-2xl font-semibold text-navy-800">
        Request a Free Consultation
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Tell us about your matter and we will respond promptly.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Full name" className={field} />
        <input
          required
          name="phone"
          type="tel"
          placeholder="Phone number"
          className={field}
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className={`${field} sm:col-span-2`}
        />
        <select name="area" defaultValue="" className={`${field} sm:col-span-2`} required>
          <option value="" disabled>
            Select a practice area
          </option>
          {practiceAreas.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
        <textarea
          required
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Briefly describe your legal matter"
          className={`${field} sm:col-span-2 resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400 disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Submit Request"}
        {status !== "sending" && <Icon name="arrowRight" className="h-4 w-4" />}
      </button>
      <p className="mt-3 text-center text-xs text-slate-400">
        Your information is kept strictly confidential.
      </p>
    </form>
  );
}
