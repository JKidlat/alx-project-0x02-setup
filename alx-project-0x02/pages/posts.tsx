// pages/posts.tsx
import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Posts | ALX Project</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Posts</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard
                key={post.id}
                userId={post.userId}
                title={post.title}
                body={post.body}
                id={post.id}
              />
            ))
          ) : (
            <p className="text-gray-600">Loading posts...</p>
          )}
        </div>
      </main>
    </>
  );
}
