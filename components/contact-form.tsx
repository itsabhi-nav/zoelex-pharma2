"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { site } from "@/lib/site";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  format: string;
  service: string;
  quantity: string;
  message: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "India",
  format: "Not sure",
  service: "Contract Manufacturing",
  quantity: "",
  message: "",
};

const formatOptions = [
  "Vegan Gummies",
  "Oral Thin Films",
  "Softgels",
  "Liposomal Formulations",
  "Not sure",
];

const serviceOptions = [
  "Contract Manufacturing",
  "Private Label / White Label",
  "Custom Formulation",
  "Not sure",
];

export default function ContactForm() {
  const params = useSearchParams();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const query = params.toString();
  const [lastQuery, setLastQuery] = useState("");

  // Apply deep-linked format/service/category preferences when the query
  // changes, without an effect that would cause a second render pass.
  if (query !== lastQuery) {
    setLastQuery(query);
    const format = params.get("format");
    const category = params.get("category");
    const service = params.get("service");

    setForm((current) => {
      const next = { ...current };
      if (format) {
        const match = formatOptions.find((option) =>
          option.toLowerCase().includes(format.toLowerCase()),
        );
        next.format = match ?? format;
      }
      if (service) {
        const match = serviceOptions.find((option) =>
          option.toLowerCase().includes(service.toLowerCase()),
        );
        next.service = match ?? service;
      }
      if (category) {
        next.message = `Wellness category: ${category}\n\n`;
      }
      return next;
    });
  }

  const update = (field: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const mailtoHref = useMemo(() => {
    const subject = `Product enquiry — ${form.format} — ${form.company || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Country: ${form.country}`,
      `Interested format: ${form.format}`,
      `Service: ${form.service}`,
      `Estimated quantity: ${form.quantity}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please share your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please add an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please check the email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Tell us a little about the product.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    window.location.href = mailtoHref;
    setSubmitted(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-[520px] flex-col justify-between rounded-sm border border-[var(--line-dark)] bg-bone p-8 md:p-10">
        <div>
          <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-ember text-bone">
            <Check className="h-5 w-5" />
          </span>
          <h3 className="display mt-6 text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.02]">
            Your email app should be open.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">
            The enquiry has been prepared with your details. Send it to{" "}
            <span className="font-medium text-ink">{site.email}</span> and our team
            will respond within 24–48 hours. If nothing opened, use the link
            below.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={mailtoHref} className="btn btn-ember">
              Open email manually
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setForm(initial);
              }}
              className="btn btn-outline"
            >
              Send another enquiry
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line-dark)] pt-5">
          <p className="text-[12px] text-ink/55">
            Prefer WhatsApp? Reach us at {site.phone}.
          </p>
          <Link href="/technologies" className="link-arrow text-ink">
            Browse formats
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-sm border border-[var(--line-dark)] bg-bone p-6 text-ink md:p-9"
    >
      <div className="border-b border-[var(--line-dark)] pb-6">
        <p className="eyebrow mb-3">Product enquiry</p>
        <h2 className="display text-[clamp(1.8rem,3.2vw,2.5rem)] leading-[1.04]">
          Tell us what you&apos;re planning.
        </h2>
      </div>

      <div className="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            autoComplete="name"
            className="field"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && (
            <p className="mt-1.5 text-[11px] text-coral">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={update("company")}
            placeholder="Brand or company"
            autoComplete="organization"
            className="field"
          />
        </div>

        <div>
          <label className="field-label" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            autoComplete="email"
            className="field"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && (
            <p className="mt-1.5 text-[11px] text-coral">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91"
            autoComplete="tel"
            className="field"
          />
        </div>

        <div>
          <label className="field-label" htmlFor="country">
            Country
          </label>
          <input
            id="country"
            name="country"
            value={form.country}
            onChange={update("country")}
            placeholder="Country"
            autoComplete="country-name"
            className="field"
          />
        </div>

        <div>
          <label className="field-label" htmlFor="quantity">
            Estimated quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            value={form.quantity}
            onChange={update("quantity")}
            placeholder="e.g. 10,000 units"
            className="field"
          />
        </div>

        <div>
          <label className="field-label" htmlFor="format">
            Interested format
          </label>
          <select
            id="format"
            name="format"
            value={form.format}
            onChange={update("format")}
            className="field"
          >
            {formatOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="field-label" htmlFor="service">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={update("service")}
            className="field"
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={update("message")}
            rows={5}
            placeholder="Share your product idea, target market and estimated quantity."
            className="field resize-none"
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && (
            <p className="mt-1.5 text-[11px] text-coral">{errors.message}</p>
          )}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-5 border-t border-[var(--line-dark)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-[var(--line-dark)] text-ink/50 transition-colors hover:border-ember hover:text-ember"
            aria-label="Copy Zoelex email address"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
          <p className="max-w-xs text-[11px] leading-relaxed text-ink/55">
            {copied ? "Email address copied." : "Your details are used only to respond to this enquiry. We do not share them with third parties."}
          </p>
        </div>
        <button type="submit" className="btn btn-ember shrink-0">
          Send enquiry
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
