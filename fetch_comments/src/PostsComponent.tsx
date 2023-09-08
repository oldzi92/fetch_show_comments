import { Photos, PostResponse, UserResponse } from "./App";
import { CommentsComponent } from "./CommentsComponent";

interface Posts {
  post: PostResponse[];
  users: UserResponse[];
  photos: Photos[];
}

export const PostsComponent = ({ post, users, photos }: Posts) => {
  return (
    <ul style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h1 style={{ textShadow: "3px 3px 5px gray", color: "#2f282f" }}>
        ~LIST OF POSTS~
      </h1>

      {post.map((onePost) => {
        const user = users.find((oneUser) => oneUser.id === onePost.id);
        const photo = photos.find((onePhoto) => onePhoto.id === onePost.id);
        return (
          <div key={onePost.userId + onePost.id}>
            <div>
              {user && (
                <>
                  <h3
                    style={{
                      color: "#ff694f",
                      textShadow: "3px 3px 5px black",
                      textAlign: "left",
                    }}
                  >
                    {user.name}:
                  </h3>
                  <p style={{ textAlign: "left" }}>email: {user.email}</p>
                </>
              )}
            </div>
            <div>
              {photo && (
                <>
                  <img src={photo.thumbnailUrl} />
                  <label>Photo title: {photo.title}</label>
                </>
              )}
            </div>
            <h3>{onePost.title}</h3>
            <p>{onePost.body}</p>
            <CommentsComponent postId={onePost.id} />
          </div>
        );
      })}
    </ul>
  );
};
