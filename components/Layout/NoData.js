import { Message, Button } from "semantic-ui-react";

export const NoProfilePosts = () => (
  <>
    <Message
      style={{
        color: "#B23B79",
        fontFamily: "Josefin Sans",
        backgroundColor: "#FCFAFA",
      }}
      icon="meh"
      header="Sorry"
      content="User has not posted anything yet!"
    />
    <Button
      style={{ fontFamily: "Josefin Sans" }}
      icon="long arrow alternate left"
      content="Go Back"
      as="a"
      href="/"
    />
  </>
);

export const NoFollowData = ({ followersComponent, followingComponent }) => (
  <>
    {followersComponent && (
      <Message
        style={{
          color: "#B23B79",
          fontFamily: "Josefin Sans",
          backgroundColor: "#FCFAFA",
        }}
        icon="user outline"
        content="User does not have followers"
      />
    )}

    {followingComponent && (
      <Message
        style={{
          color: "#B23B79",
          fontFamily: "Josefin Sans",
          backgroundColor: "#FCFAFA",
        }}
        icon="user outline"
        content="User does not follow any users"
      />
    )}
  </>
);

export const NoMessages = () => (
  <Message
    style={{
      color: "#B23B79",
      fontFamily: "Josefin Sans",
      backgroundColor: "#FCFAFA",
    }}
    icon="telegram plane"
    header="Sorry"
    content="You have not messaged anyone yet.Search above to message someone!"
  />
);

export const NoPosts = () => (
  <Message
    floating
    style={{
      color: "#B23B79",
      fontFamily: "Josefin Sans",
      backgroundColor: "#FCFAFA",
    }}
    icon="meh"
    header="Hey!"
    content="No Posts. Make sure you have followed someone."
  />
);

export const NoNotifications = () => (
  <Message
    style={{
      color: "#B23B79",
      fontFamily: "Josefin Sans",
      backgroundColor: "#FCFAFA",
    }}
    content="No Notifications"
    icon="smile"
  />
);

export const NoProfile = () => (
  <Message
    style={{
      color: "#B23B79",
      fontFamily: "Josefin Sans",
      backgroundColor: "#FCFAFA",
    }}
    icon="meh"
    header="Hey!"
    content="No Profile Found."
  />
);
