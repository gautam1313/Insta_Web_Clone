import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ username }) => {
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <Link className="flex items-center" to={`/p/${username}`}>
          <img
            src={`/images/avatars/${username}.jpg`}
            alt={`${username} profile`}
            className="rounded-full w-8 h-8 mr-3 flex"
          />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
