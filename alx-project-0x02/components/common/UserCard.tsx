// components/common/UserCard.tsx
import { UserProps } from "../../interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold text-blue-700 mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  );
}
