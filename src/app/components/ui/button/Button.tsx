import { cn } from "@/functions/cn";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  textColor: string;
  borderColor: string;
  href: string;
  className?: string;
  ariaLabel: string;
}

export default function Button({
  children,
  textColor,
  borderColor,
  href,
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <button className={className} aria-label={ariaLabel}>
      <Link
        href={href}
        className={cn(
          `uppercase font-poppins font-medium text-lg border-2 rounded px-3 py-1 
          ${textColor} ${borderColor} md:hover:scale-105 md:transition-transform`
        )}
      >
        {children}
      </Link>
    </button>
  );
}
