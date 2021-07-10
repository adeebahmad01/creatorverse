import React from "react";

const ProfileCard = ({ profile_image, name }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-4">
      <img src={profile_image} alt={name} className="w-100 rounded-5 mb-3" />
      <div className="text-center h6">{name}</div>
    </div>
  );
};

export default ProfileCard;
