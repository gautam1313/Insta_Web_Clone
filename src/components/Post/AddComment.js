import PropTypes from "prop-types";
import { useState, useContext } from "react";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

const AddComment = ({ docId, comments, setComments, commentInput }) => {
  const [comment, setComment] = useState("");
  const { displayName } = useContext(UserContext);
  const { db, doc, updateDoc, arrayUnion } = useContext(FirebaseContext);

  const handleSubmitComment = async (event) => {
    event.preventDefault();

    setComments([...comments, { displayName, comment }]);
    setComment("");

    const commentsRef = doc(db, "photos", docId);

    const addedComment = await updateDoc(commentsRef, {
      comments: arrayUnion({ displayName, comment }),
    });

    return addedComment;
  };

  return (
    <div className="border-t border-gray-primary">
      <form
        method="POST"
        className="flex justify-between pl-0 pr-5"
        onSubmit={(event) =>
          comment.length > 0
            ? handleSubmitComment(event)
            : event.preventDefault()
        }
      >
        <input
          aria-label="Add a comment"
          autoComplete="off"
          className="text-sm text-gray-base w-full py-5 px-4 mr-3"
          type="text"
          name="add-comment"
          placeholder="Add a comment.."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-medium ${
            !comment && "opacity-25"
          }`}
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          POST
        </button>
      </form>
    </div>
  );
};

AddComment.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  setComments: PropTypes.func.isRequired,
  commentInput: PropTypes.object.isRequired,
};

export default AddComment;
