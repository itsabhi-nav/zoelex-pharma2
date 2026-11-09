import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export type LegalContent = {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export function LegalPage({ content }: { content: LegalContent }) {
  return (
    <>
      <section className="surface-dark relative overflow-hidden pt-[calc(var(--nav-h)+3rem)] pb-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-ember/[0.08] blur-[120px]"
        />
        <div className="shell relative">
          <div className="flex items-center justify-between gap-4">
            <p className="mono-label flex items-center gap-3 text-ember">
              <span className="h-px w-8 bg-ember" aria-hidden="true" />
              Legal
            </p>
            <span className="mono-micro text-bone/40">{content.updated}</span>
          </div>

          <div className="mt-8 grid items-end gap-8 border-b border-[var(--line-light)] pb-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <h1 className="display max-w-[18ch] text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.94] text-bone">
                  {content.title}
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <p className="max-w-sm text-[15px] leading-relaxed text-bone/55">
                {content.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-bone py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="mono-micro mb-4 text-ink/40">On this page</p>
              <nav className="border-t border-[var(--line)]">
                {content.sections.map((section, index) => (
                  <a
                    key={section.heading}
                    href={`#section-${index + 1}`}
                    className="group flex items-baseline gap-3 border-b border-[var(--line)] py-2.5 text-[13px] text-ink/60 transition-colors hover:text-ember"
                  >
                    <span className="mono-micro text-ink/25 group-hover:text-ember">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="space-y-10">
              {content.sections.map((section, index) => (
                <Reveal
                  key={section.heading}
                  id={`section-${index + 1}`}
                  className="scroll-mt-28"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="mono-micro text-ember">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-[20px] font-medium leading-snug text-ink">
                      {section.heading}
                    </h2>
                  </div>
                  <p className="mt-3 max-w-2xl text-[14px] leading-[1.85] text-ink/65">
                    {section.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 flex flex-col items-start justify-between gap-5 border border-[var(--line)] bg-bone-2/50 p-6 sm:flex-row sm:items-center md:p-8">
              <p className="text-sm text-ink/70">
                Questions about this policy? Write to{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-ink underline decoration-ember underline-offset-4"
                >
                  {site.email}
                </a>
              </p>
              <Link href="/contact" className="btn btn-ember shrink-0">
                Contact us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
