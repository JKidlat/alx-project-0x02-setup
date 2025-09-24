// pages/home.tsx
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function Home() {
  return (
    <div>
      <Header /> {/* ✅ added */}
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <Card title="Card 1" content="This is the first card." />
        <Card title="Card 2" content="This is the second card." />
      </main>
    </div>
  );
}
