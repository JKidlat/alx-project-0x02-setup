// components/layout/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex space-x-6 justify-center">
        <Link href="/home" className="hover:text-gray-200">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-200">
          About
        </Link>
        <Link href="/posts" className="hover:text-gray-200">
          Posts
        </Link>
      </nav>
    </header>
  );
}
