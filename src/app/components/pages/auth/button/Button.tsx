import { cn } from "@/functions/cn";
import { ReactNode } from "react";

export default function Button({
  children,
  className,
  ariaLabel,
  disabled,
}: {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  disabled: boolean;
}) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "bg-Sandstone-500 rounded-lg font-poppins text-lg text-cold-gray-50 py-3 w-full max-w-[450px] md:min-w-[450px]",
        className,
        disabled ? "bg-Sandstone-300" : ""
      )}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
