import { TPosts, TUsers } from "./2App";
import { Comment2 } from "./2Comment";

interface Posts {
  post: TPosts[];
  users: TUsers[];
}

export const Post2 = ({ post, users }: Posts) => {
  return (
    <ul>
      <h1>Lista postów</h1>
      {post.map((onePost) => {
        const user = users.find((oneUser) => oneUser.id === onePost.id);
        return (
          <div key={onePost.id}>
            <div>
              {user && <h3>{user.name}</h3>}
              <li>Tytuł: {onePost.title}</li>
              <p>{onePost.body}</p>
              <Comment2 postId={onePost.id} />
            </div>
          </div>
        );
      })}
    </ul>
  );
};
