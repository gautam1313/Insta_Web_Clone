import PropTypes from "prop-types";

const Footer = ({ username, caption }) => {
  return (
    <div className="p-4 pt-2 pb-0">
      <span className="font-bold mr-3">{username}</span>
      <span>{caption}</span>
    </div>
  );
};

Footer.propTypes = {
  username: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Footer;
