import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

const Photos = ({ photos }) => {
  return (
    <div className="mt-12 pt-4 border-t border-gray-primary h-16">
      <div className="mt-4 mb-12 grid grid-cols-3 gap-8 group">
        {!photos ? (
          <>
            <Skeleton count={12} width={320} height={400} />
          </>
        ) : photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.docId} className="relative">
              hi
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default Photos;
