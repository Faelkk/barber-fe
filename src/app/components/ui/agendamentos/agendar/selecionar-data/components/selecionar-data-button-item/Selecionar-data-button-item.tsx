import { cn } from "@/functions/cn";

export default function SelecionarDataButtonItem({
  isActive,
  onClick,
  children,
}: {
  isActive?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <li
      className={cn(
        "rounded py-3 cursor-pointer",
        isActive ? "bg-Seashell-100 text-cold-gray-400" : ""
      )}
      onClick={onClick}
    >
      <span className="px-4 text-ellipsis overflow-hidden text-nowrap">
        {children}
      </span>
    </li>
  );
}
