import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  href,
  className,
  hover = true,
}: CardProps) {
  const classes = cn(
    "bg-white rounded-2xl shadow-md overflow-hidden",
    hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "block")}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
