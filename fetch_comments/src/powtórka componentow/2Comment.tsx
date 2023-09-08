import { useState } from "react";

export interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentsId {
  postId: number;
}

export const Comment2 = ({ postId }: CommentsId) => {
  const [comments, setComments] = useState<IComments[]>([]);
  const [showComments, setShowComments] = useState(false);

  const downloadComments = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments")
      .then((resp) => resp.json())
      .then((response) => {
        setComments(response);
      });
  };

  const buttonFnc = () => {
    if (!showComments) {
      downloadComments();
    }
    setShowComments(!showComments);
  };
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault;
          buttonFnc();
        }}
      >
        Poka komentarze
      </button>
      {showComments ? (
        <ul>
          {comments?.map((comment) => {
            return (
              <div key={comment.id}>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
              </div>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
