import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { nav, site } from "@/lib/site";

const moreLinks = [
  { label: "Why Zoelex", href: "/about#why-zoelex" },
  { label: "Product Categories", href: "/technologies#categories" },
  { label: "Infrastructure", href: "/manufacturing#facility" },
  { label: "Quality Process", href: "/manufacturing#quality" },
  { label: "Careers", href: "/about#careers" },
  { label: "FAQs", href: "/contact#faqs" },
];

export default function Footer() {
  return (
    <footer className="bg-plum text-bone">
      <section className="shell border-t border-[var(--line-dark)] py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Start a conversation</p>
            <h2 className="display text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.98]">
              Let&apos;s make something
              <br />
              worth taking.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-sm text-[15px] leading-relaxed text-bone/60">
              Share your idea, intended market and preferred format. Our team
              responds within 24–48 hours with formulation options and a quote.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-bone">
                Start an enquiry
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/technologies" className="btn btn-outline-light">
                Browse formats
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="shell border-t border-[var(--line-dark)] py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="text-bone" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/55">
              Contract and private-label manufacturing of gummies, oral thin
              films, softgels and liposomal products in Pune, India.
            </p>
            <div className="mt-6 flex items-start gap-3 text-sm text-bone/55">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bone/40" />
              <p>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone/55 transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">More</p>
            <ul className="space-y-2.5">
              {moreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone/55 transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-4">Get in touch</p>
            <ul className="space-y-2.5 text-sm text-bone/55">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-bone"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.careersEmail}`}
                  className="transition-colors hover:text-bone"
                >
                  {site.careersEmail}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-bone"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-bone"
                >
                  Find us on maps
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3 text-sm text-bone/50">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="transition-colors hover:text-bone"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <span>{site.hours}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="shell border-t border-[var(--line-dark)]">
        <div className="flex flex-col gap-3 py-6 pb-24 text-[11px] text-bone/45 sm:pr-24 sm:pb-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl leading-relaxed">{site.disclaimer}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© 2026 Zoelex Pharma</span>
            <Link href="/privacy-policy" className="transition-colors hover:text-bone">
              Privacy
            </Link>
            <Link href="/terms-of-use" className="transition-colors hover:text-bone">
              Terms
            </Link>
            <a href="#top" className="transition-colors hover:text-bone">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
