"use client";

import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  q: string;
  a: string;
}

/**
 * Component: FAQ accordion. One row open at a time, + / − icon, gold left
 * border on the open row (design.md §3.4).
 */
export function Accordion({ items, className }: { items: AccordionItemData[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-line rounded-card border border-line bg-clinical-white", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div
            key={item.q}
            className={cn("border-l-2 transition-colors", isOpen ? "border-l-gold" : "border-l-transparent")}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full min-h-[56px] items-center justify-between gap-4 px-5 py-4 text-left font-body font-semibold text-ink hover:text-evergreen"
              >
                <span>{item.q}</span>
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-evergreen" aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-ink/70 leading-relaxed"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
