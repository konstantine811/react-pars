import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "../../utils/cn";

interface ButtonProps {
  type?: "button" | "link";
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  isIcon?: boolean;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
}

const Button = ({
  type = "button",
  children,
  to,
  onClick,
  className = "",
  icon,
  isIcon = true,
  iconPosition = "right",
  size = "md",
  variant = "primary",
}: ButtonProps) => {
  const sizeClasses = {
    sm: "text-xs px-6 py-2",
    md: "text-xs px-8 py-3",
    lg: "text-sm px-10 py-4",
  };

  const baseClasses = cn(
    variant === "primary" || variant === "outline"
      ? "bg-yellow-700/80 hover:bg-yellow-600 text-white"
      : "bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white",
    variant === "outline" &&
      "bg-white/5 hover:bg-yellow-900/20 border border-white/10 hover:border-yellow-600/50 text-zinc-200 hover:text-yellow-500",
    variant === "secondary" &&
      "bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white",
    "brand-font transition-all tracking-[0.2em] uppercase flex items-center gap-2 group",
    sizeClasses[size],
    className
  );

  const defaultIcon = (
    <ChevronRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
  );
  const displayIcon = isIcon
    ? icon || (iconPosition === "right" ? defaultIcon : null)
    : null;

  if (type === "link" && to) {
    return (
      <Link to={to} className={baseClasses}>
        {iconPosition === "left" && displayIcon}
        <span>{children}</span>
        {iconPosition === "right" && displayIcon}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {iconPosition === "left" && displayIcon}
      <span>{children}</span>
      {iconPosition === "right" && displayIcon}
    </button>
  );
};

export default Button;
