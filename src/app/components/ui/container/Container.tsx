import { cn } from "@/functions/cn";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("flex w-full items-center justify-center ", className)}>
      {children}
    </main>
  );
}
