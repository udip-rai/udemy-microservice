import { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  const renderedComments = comments ? (
    comments?.map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    })
  ) : (
    <></>
  );

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
