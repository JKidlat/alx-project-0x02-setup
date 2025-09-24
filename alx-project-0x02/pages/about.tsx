// pages/about.tsx
import Head from "next/head";
import Header from "../components/layout/Header";
import Button from "../components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | ALX Project</title>
      </Head>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-blue-600">About Page</h1>
        <p className="mt-2 text-gray-700">
          This page demonstrates reusable components in our Next.js project.
        </p>

        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">
            Small Button
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium Button
          </Button>
          <Button size="large" shape="rounded-full">
            Large Button
          </Button>
        </div>
      </main>
    </>
  );
}
