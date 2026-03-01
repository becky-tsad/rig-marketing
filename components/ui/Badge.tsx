import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "coral" | "navy" | "gray";
  className?: string;
}

const variants = {
  coral: "bg-coral/10 text-coral",
  navy: "bg-navy-900/10 text-navy-900",
  gray: "bg-gray-100 text-gray-600",
};

export default function Badge({
  children,
  variant = "coral",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
