import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost" | "text" | "light";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-white hover:bg-brown border border-ink hover:border-brown",
  light:
    "bg-foam text-ink border border-foam hover:bg-cream hover:border-cream",
  outline:
    "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-foam/50",
  ghost:
    "bg-transparent text-foam border border-foam/45 hover:bg-foam/10",
  text: "bg-transparent text-brown border-0 px-0 min-h-0 underline-offset-4 hover:underline",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & {
    href: string;
    onClick?: ComponentPropsWithoutRef<"a">["onClick"];
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 min-h-12 px-6 text-[0.92rem] font-medium tracking-[0.02em] transition-colors duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown";

export function Button(props: ButtonProps) {
  const { children, variant = "solid", className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;
    const isHash = href.startsWith("#");
    const isExternal = href.startsWith("http");

    if (isHash) {
      return (
        <a href={href} className={classes} {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
