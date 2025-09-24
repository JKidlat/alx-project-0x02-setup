// pages/users.tsx
import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <>
      <Head>
        <title>Users | ALX Project</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Users</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {users.length > 0 ? (
            users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                address={user.address}
              />
            ))
          ) : (
            <p className="text-gray-600">Loading users...</p>
          )}
        </div>
      </main>
    </>
  );
}
