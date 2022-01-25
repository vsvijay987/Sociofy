import React from "react";
import { Modal, Grid, Image, Card, Icon, Divider } from "semantic-ui-react";
import PostComments from "./PostComments";
import CommentInputField from "./CommentInputField";
import calculateTime from "../../utils/calculateTime";
import Link from "next/link";
import { likePost } from "../../utils/postActions";
import LikesList from "./LikesList";

const ImageModal = ({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments,
}) => {
  return (
    <>
      <Grid columns={2} stackable relaxed>
        <Grid.Column>
          <Modal.Content image>
            <Image wrapped size="large" src={post.picUrl} />
          </Modal.Content>
        </Grid.Column>

        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Image floated="left" avatar src={post.user.profilePicUrl} />

              <Card.Header className="font-link">
                <Link href={`/${post.user._id}`}>
                  <a>{post.user.name}</a>
                </Link>
              </Card.Header>

              <Card.Meta className="font-link">
                {calculateTime(post.createdAt)}
              </Card.Meta>

              {post.location && <Card.Meta content={post.location} />}

              <div
                style={{
                  fontSize: "17px",
                  letterSpacing: "0.1px",
                  color: `${post.textColor}`,
                  wordSpacing: "0.35px",
                  paddingLeft: "43px",
                  paddingTop: "20px",
                }}
                className="font-link"
              >
                {post.text}
              </div>
            </Card.Content>

            <Card.Content extra>
              <Icon
                name={isLiked ? "heart" : "heart outline"}
                color="red"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  likePost(post._id, user._id, setLikes, isLiked ? false : true)
                }
              />

              <LikesList
                postId={post._id}
                trigger={
                  likes.length > 0 && (
                    <span className="spanLikesList">
                      {`${likes.length} ${
                        likes.length === 1 ? "like" : "likes"
                      }`}
                    </span>
                  )
                }
              />
              <Icon
                name="comment outline"
                style={{ marginLeft: "7px" }}
                color="blue"
              />

              <Divider hidden />

              <div
                style={{
                  overflow: "auto",
                  height: comments.length > 2 ? "200px" : "60px",
                  marginBottom: "8px",
                }}
              >
                {comments.length > 0 &&
                  comments.map((comment) => (
                    <PostComments
                      key={comment._id}
                      comment={comment}
                      postId={post._id}
                      user={user}
                      setComments={setComments}
                    />
                  ))}
              </div>

              <CommentInputField
                postId={post._id}
                user={user}
                setComments={setComments}
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default ImageModal;
