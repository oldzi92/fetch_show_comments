import { useState } from "react";
import "./App.css";

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentsComponent {
  postId: number;
}

export interface Users {
  id: number;
  name: string;
  userName: string;
  email: string;
}

export const CommentsComponent = ({ postId }: ICommentsComponent) => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [showComments, setShowComments] = useState(false);
  const [buttonColor, setButtonColor] = useState(".button-53");

  const downloadComments = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments")
      .then((resp) => resp.json())
      .then((response) => {
        setComments(response);
      });
  };

  const buttonFunctions = () => {
    if (!showComments) {
      downloadComments();
    }
    setShowComments(!showComments);
    setButtonColor(showComments ? "#3dd1e7" : "#ffad8f");
  };

  return (
    <div
      style={{
        backgroundColor: "#ffad8f",
        boxShadow: "3px 3px 10px gray, black -3px 3px 10px, 3px -3px 10px",
        width: "40%",
        textAlign: "center",
        display: "inline-block",
        borderInline: " 50px",
      }}
    >
      <button
        className="button-53"
        style={{
          // display: "contents",
          // fontSize: "25px",
          backgroundColor: buttonColor,
          // boxShadow: "3px 3px 10px red, yellow -3px 3px 10px, 3px -3px 10px",
        }}
        onClick={(e) => {
          e.preventDefault;
          buttonFunctions();
        }}
      >
        {showComments ? "Hide commentS" : "Show commentS"}
      </button>
      {showComments ? (
        <ul>
          {comments?.map((comment) => {
            return (
              <div key={comment.id}>
                <b style={{ color: "Black" }}>{comment.name}</b>
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
