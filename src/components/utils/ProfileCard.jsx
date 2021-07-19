import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile_image, name, id }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-4">
      <Link to={`/profile/${id}`}>
        <img
          src={profile_image?.[0]?.src}
          alt={name}
          className="w-100 shadow-sm objfit rounded-5 mb-3"
        />
        <div className="text-center h6 name">{name}</div>
      </Link>
    </div>
  );
};

export default ProfileCard;
