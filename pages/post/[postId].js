import React, { useState } from "react";
import axios from "axios";
import { parseCookies } from "nookies";
import {
  Card,
  Icon,
  Image,
  Divider,
  Segment,
  Container,
} from "semantic-ui-react";
import PostComments from "../../components/Post/PostComments";
import CommentInputField from "../../components/Post/CommentInputField";
import LikesList from "../../components/Post/LikesList";
import Link from "next/link";
import { likePost } from "../../utils/postActions";
import calculateTime from "../../utils/calculateTime";
import baseUrl from "../../utils/baseUrl";
import { NoPostFound } from "../../components/Layout/NoData";

const PostPage = ({ post, errorLoading, user }) => {
  if (errorLoading) {
    return <NoPostFound />;
  }

  const [likes, setLikes] = useState(post.likes);

  const isLiked =
    likes.length > 0 &&
    likes.filter((like) => like.user === user._id).length > 0;

  const [comments, setComments] = useState(post.comments);

  return (
    <>
      <Segment className="posts-segment" style={{ height: "85vh" }}>
        <Segment basic>
          <Card raised fluid>
            <Card.Content>
              <Image
                floated="left"
                src={post.user.profilePicUrl}
                avatar
                circular
              />
              <Card.Header style={{ fontFamily: "Josefin Sans" }}>
                <Link href={`/${post.user._id}`}>
                  <a>{post.user.name}</a>
                </Link>
              </Card.Header>

              <Card.Meta className="font-link">
                {calculateTime(post.createdAt)}
              </Card.Meta>

              {post.location && (
                <Card.Meta className="font-link" content={post.location} />
              )}

              <div
                style={{
                  fontSize: "17px",
                  letterSpacing: "0.1px",
                  wordSpacing: "0.35px",
                  color: `${post.textColor}`,
                  paddingLeft: "43px",
                  paddingTop: "20px",
                }}
                className="font-link"
              >
                {post.text}
              </div>
            </Card.Content>

            {post.picUrl && (
              <Image
                src={post.picUrl}
                style={{ cursor: "pointer" }}
                floated="left"
                wrapped
                ui={false}
                alt="PostImage"
                onClick={() => setShowModal(true)}
              />
            )}

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
                    <span className="font-link">
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
              {comments.length > 0 && (
              <span className="font-link">
                {`${comments.length} ${
                  comments.length === 1 ? "comment" : "comments"
                }`}
              </span>
            )}

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

              <Divider hidden />

              <CommentInputField
                user={user}
                postId={post._id}
                setComments={setComments}
              />
            </Card.Content>
          </Card>
        </Segment>
        <Divider hidden />
      </Segment>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const { postId } = ctx.query;
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/posts/${postId}`, {
      headers: { Authorization: token },
    });
    return { props: { post: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};

export default PostPage;
