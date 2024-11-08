import { cn } from "@/functions/cn";
import { ReactNode } from "react";

export default function Button({
  children,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      className={cn(
        "bg-Sandstone-700 rounded-lg font-poppins text-lg text-cold-gray-50 py-3 w-full max-w-[450px] md:min-w-[450px]",
        className
      )}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
