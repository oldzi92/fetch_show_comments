import { useEffect, useState } from "react";
import { Post2 } from "./2Post";
import { Filter2 } from "./2Filter";

export type TPosts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type TFilter = {
  title: string;
  body: string;
};
export type TUsers = {
  id: number;
  name: string;
  userName: string;
  email: string;
};

function App2() {
  const [posts, setPosts] = useState<TPosts[]>([]);
  const [filter, setFilter] = useState<TFilter>({
    title: "",
    body: "",
  });
  const [users, setUsers] = useState<TUsers[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((response) => {
        setPosts(response);
      });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((response) => setUsers(response));
  });

  const FilteredPosts = posts
    .filter(({ title }) => {
      return !filter.title || title.includes(filter.title);
    })
    .filter(({ body }) => {
      return !filter.body || body.includes(filter.body);
    });
  return (
    <article>
      <Filter2 filter={filter} setFilter={setFilter} />
      <Post2 post={FilteredPosts} users={users} />
    </article>
  );
}

export default App2;
