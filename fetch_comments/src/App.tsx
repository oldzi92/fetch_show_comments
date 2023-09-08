import "@picocss/pico";

import { useState, useEffect } from "react";
import { PostsComponent } from "./PostsComponent";
import { FilterComponent } from "./FilterComponent";

export type PostResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Filter = {
  title: string;
  body: string;
};

export type UserResponse = {
  id: number;
  name: string;
  userName: string;
  email: string;
};

export type Photos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

function App() {
  const [post, setPost] = useState<PostResponse[]>([]);
  console.table(post);
  const [filter, setFilter] = useState<Filter>({
    title: "",
    body: "",
  });
  // console.log('filter', filter)
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [photos, setPhotos] = useState<Photos[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((response) => {
        setPost(response);
      });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((response) => {
        setUsers(response);
      });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((response) => setPhotos(response));
  }, []);

  const postsToDisplay = post
    .filter(({ title }) => {
      return !filter.title || title.includes(filter.title);
    })
    .filter(({ body }) => {
      return !filter.body || body.includes(filter.body);
    });

  return (
    <>
      <article style={{ backgroundColor: "#ffcc59", fontFamily: "monospace" }}>
        <FilterComponent filter={filter} setFilter={setFilter} />
        <PostsComponent post={postsToDisplay} users={users} photos={photos} />
      </article>
    </>
  );
}

export default App;
