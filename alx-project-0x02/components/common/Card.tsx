// components/common/Card.tsx
import { type CardProps } from "@/interfaces"; // ✅ required import

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-lg font-bold text-blue-600">{title}</h2>
      <p className="mt-2 text-gray-700">{content}</p>
    </div>
  );
}
