// components/common/PostCard.tsx
import { PostProps } from "../../interfaces";

export default function PostCard({ userId, title, body }: PostProps) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-700 mb-3">{body}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
}
