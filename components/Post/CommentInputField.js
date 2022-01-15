import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { postComment } from "../../utils/postActions";

const CommentInputField = ({ postId, user, setComments }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await postComment(postId, user, text, setComments, setText);
        setLoading(false);
      }}
    >
      <Form.Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Comment"
        action={{
          color: "blue",
          icon: "send",
          loading: loading,
          disabled: text === "" || loading,
        }}
      />
    </Form>
  );
};

export default CommentInputField;
