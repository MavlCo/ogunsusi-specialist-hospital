import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "emergency" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-input font-body font-semibold " +
  "transition-colors duration-150 ease-out min-h-[48px] px-6 " +
  "disabled:opacity-40 disabled:pointer-events-none select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-evergreen text-white hover:bg-healing-green active:bg-evergreen/90 " +
    "[&_.underline-fx]:hover:w-full",
  secondary:
    "bg-transparent text-evergreen border-[1.5px] border-evergreen hover:bg-sage",
  emergency:
    "bg-transparent text-emergency border-[1.5px] border-emergency hover:bg-emergency hover:text-white",
  ghost: "bg-transparent text-ink hover:bg-sage",
};

const sizes: Record<Size, string> = {
  md: "text-sm h-12",
  lg: "text-base h-13",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "href" | "className"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Shared CTA button covering every state token in design.md §3.4: primary
 * (evergreen → healing green hover with a gold underline sweep), secondary
 * (outline), and emergency (red outline → filled on hover). Renders as a
 * Next.js Link when `href` is supplied, otherwise a native button.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], "relative overflow-hidden group", className);

  const content =
    variant === "primary" ? (
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    ) : (
      children
    );

  if ("href" in props && props.href !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripped so `rest` doesn't duplicate them onto <Link>
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
        {variant === "primary" && (
          <span
            aria-hidden="true"
            className="underline-fx pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-200 ease-out group-hover:w-full"
          />
        )}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripped so `rest` doesn't duplicate them onto <button>
  const { variant: _v2, size: _s2, className: _c2, children: _ch2, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {content}
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="underline-fx pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-200 ease-out group-hover:w-full"
        />
      )}
    </button>
  );
}
