"use client";
import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import { Spinner } from '@nextui-org/react';

import CreatePost from './components/CreatePost';
import PostCard from './components/PostCard';

export default function Home() {
  const [user, setUser] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const [loader, setLoader] = useState(true);

  const getUser = async (userId: string) => {
    const rq = await axios.get(
      `http://localhost:3000/api/getUser?id=${userId}`
    );
    const user = await rq.data;

    setUser(user[0]);
  };

  const getUsers = async () => {
    const req = await axios.get("http://localhost:3000/api/getUsers");
    const users = await req.data;
    setUsers(users);
  };

  useEffect(() => {
    getUser("64ff421316ea742c37f53ca2").then(() => setLoader(false));
    getUsers();
  }, []);

  return (
    <div className="flex gap-5 p-5 flex-wrap">
      {loader ? (
        <Spinner />
      ) : (
        <>
          {user.posts.map((post: any) => (
            <PostCard key={post.id} data={{ ...user, posts: [post] }} />
          ))}
          <CreatePost setUser={setUser} />
        </>
      )}
    </div>
  );
}
