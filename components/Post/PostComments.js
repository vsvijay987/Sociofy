import React, { useState } from "react";
import { Comment, Icon, Button } from "semantic-ui-react";
import calculateTime from "../../utils/calculateTime";
import { deleteComment } from "../../utils/postActions";

const PostComments = ({ comment, user, setComments, postId }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={comment.user.profilePicUrl} />
          <Comment.Content>
            <Comment.Author
              as="a"
              href={`/${comment.user._id}`}
              className="name-font"
            >
              {comment.user.name}
            </Comment.Author>
            <Comment.Metadata className="font-link">
              {calculateTime(comment.date)}
            </Comment.Metadata>

            <Comment.Text className="font-link">{comment.text}</Comment.Text>

            <Comment.Actions>
              <Comment.Action>
                {comment.user._id === user._id && (
                  <p
                    disabled={disabled}
                    onClick={async () => {
                      setDisabled(true);
                      await deleteComment(postId, comment._id, setComments);
                      setDisabled(false);
                    }}
                    basic
                    style={{color: 'red', fontSize: '10px', textDecoration: 'underline'}}
                  >
                    Delete
                  </p>
                )}
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </>
  );
};

export default PostComments;
