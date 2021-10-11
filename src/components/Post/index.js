import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./Header";

const Post = ({ content }) => {
  console.log(content);
  return (
    <div className="bg-white mb-16 border border-gray-primary rounded col-span-4">
      <Header username={content.username} />
    </div>
  );
};

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
    docId: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
  }),
};

export default Post;
