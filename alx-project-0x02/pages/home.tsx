// pages/home.tsx
import Head from "next/head";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
import { useState } from "react";

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Head>
        <title>Home | ALX Project</title>
      </Head>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-blue-600">Home Page</h1>
        <p className="mt-2 text-gray-700">
          Welcome to the Home page of the Next.js project 🚀.
        </p>

        {/* Add Post Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          + Add New Post
        </button>

        {/* Render Cards for Posts */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      {/* Post Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </>
  );
}
