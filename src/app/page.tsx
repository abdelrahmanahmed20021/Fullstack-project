"use client";
import { useEffect, useState } from "react";

import axios from "axios";

import { Spinner } from "@nextui-org/react";

import CreatePost from "./components/CreatePost";
import PostCard from "./components/PostCard";

type User = {
  id: string;
  email: string;
  password: string;
};

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loader, setLoader] = useState(false);
  const getPosts = async () => {
    const reqPosts = await axios.get("http://localhost:3000/api/getPosts");
    const posts = await reqPosts.data;
    setPosts(posts);
  };

  const getUsers = async (userId: string) => {
    const rq = await axios.get(
      `http://localhost:3000/api/getUser?id=${userId}`
    );
    const user = await rq.data;

    return user[0];
  };

  useEffect(() => {
    getPosts().then(() => {
      setLoader(true);
    });
  }, []);

  useEffect(() => {
    posts.forEach(async (e: any) => {
      const user = await getUsers(e.userId);
      setUsers((prev) => [...prev, user]);
    });
  }, [posts]);

  return (
    <>
      <div className="flex gap-5 p-5 flex-wrap">
        {posts &&
          users &&
          posts.map((e: any, index: number) => {
            const user = getUsers(e?.userId);
            return (
              <PostCard key={e?.id} data={e && { ...e, user: users[index] }} />
            );
          })}
      </div>
      {!loader && <Spinner color="warning" size="lg" />}
      <CreatePost />
    </>
  );
}
