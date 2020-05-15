import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail.js";
import ApprovalCard from "./ApprovalCard.js";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Jesse"
          timeAgo="Today at 12:00pm"
          pic={faker.image.avatar()}
          content="Cool post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Kim"
          timeAgo="Today at 11:00am"
          pic={faker.image.avatar()}
          content="Nice blog"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
