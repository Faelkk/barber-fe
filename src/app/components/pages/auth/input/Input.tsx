import { cn } from "@/functions/cn";

export default function Input({
  type,
  placeholder,
  className,
}: {
  type: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        "p-3 rounded border border-[#bbbb] placeholder:font-poppins placeholder:text-Seashell-950 w-full md:min-w-[450px] max-w-[450px]",
        className
      )}
    />
  );
}
