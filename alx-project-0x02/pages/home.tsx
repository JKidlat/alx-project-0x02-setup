// pages/home.tsx
import Head from "next/head";
import Header from "@/components/layout/Header"; // ✅ use alias
import Card from "@/components/common/Card";     // ✅ required alias import

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | ALX Project</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">Welcome to the Home Page</h1>

        {/* ✅ Use Card component with props */}
        <div className="mt-6 grid gap-4">
          <Card title="Card One" content="This is the first card." />
          <Card title="Card Two" content="This is the second card with different content." />
          <Card title="Card Three" content="This is the third card to show reusability." />
        </div>
      </main>
    </>
  );
}
