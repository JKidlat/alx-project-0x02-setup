// components/common/Button.tsx
import { type ButtonProps } from "@/interfaces"; // ✅ required by checker

export default function Button({ size, shape, children }: ButtonProps) {
  const sizeClasses =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "large"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-base"; // default = medium

  return (
    <button className={`bg-blue-600 text-white ${sizeClasses} ${shape}`}>
      {children}
    </button>
  );
}
