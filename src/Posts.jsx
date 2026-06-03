import { use } from "react";

export default function Posts({ postsPromise }) {
  const posts = use(postsPromise);
  return (
    <div className="card">
      <h2>Posts: {posts.length}</h2>
    </div>
  );
}
