import moment from "moment";
import Moment from "react-moment";

const calculateTime = (createdAt) => {
  const today = moment(Date.now());
  const postDate = moment(createdAt);
  const diffInHours = today.diff(postDate, "hours");
  const diffInMinutes = today.diff(postDate, "minutes");
  const diffInSeconds = today.diff(postDate, "seconds");

  if (diffInSeconds < 60) {
    if (diffInSeconds == 0) {
      return <>Just now</>;
    }
    if (diffInSeconds == 1) {
      return <>{diffInSeconds} second ago</>;
    }
    return <>{diffInSeconds} seconds ago</>;
  }

  if (diffInMinutes < 60) {
    if (diffInMinutes == 1) {
      return <>{diffInMinutes} minute ago</>;
    }
    return <>{diffInMinutes} minutes ago</>;
  }

  if (diffInHours < 24) {
    if (diffInHours === 1) {
      return <>{diffInHours} hour ago</>;
    }
    return <>{diffInHours} hours ago</>;
  } else if (diffInHours > 24 && diffInHours < 36) {
    return (
      <>
        Yesterday <Moment format="hh:mm A">{createdAt}</Moment>
      </>
    );
  } else if (diffInHours > 36) {
    return <Moment format="MMM Do YYYY, h:mm a">{createdAt}</Moment>;
  }
};

export default calculateTime;
