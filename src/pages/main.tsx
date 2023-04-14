import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

interface Post {
  id: string;
  userId: string;
  title: string;
  description: string;
  username: string;
}

export const Main = () => {
  const [postList, setPostList] = useState<Post[] | null>(null);

  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};
