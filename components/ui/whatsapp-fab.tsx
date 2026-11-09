"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Zoelex Pharma on WhatsApp"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-ember bg-ember text-ink shadow-[0_14px_40px_rgba(11,10,8,0.35)] transition-colors hover:bg-ember-2 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
        >
          <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap border border-[var(--line-light)] bg-ink px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-bone/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
            Chat on WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
