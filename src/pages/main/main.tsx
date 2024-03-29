import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";
import "./post.css";

export interface PostInterface {
  id: string;
  userId: string;
  title: string;
  description: string;
  userName: string;
}

export const Main = () => {
  const [postList, setPostList] = useState<PostInterface[] | null>(null);

  useEffect(() => {
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
      const data = await getDocs(postsRef);
      setPostList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as PostInterface[]
      );
    };

    getPosts();
  }, [postList]);

  return (
    <div className="postspace">
      {postList?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
