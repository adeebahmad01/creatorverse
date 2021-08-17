import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext";

const ProfileCard = ({ profile_image, name, id }) => {
  const { presales } = useData();
  const presale =
    presales.find((presale) => presale.creators?.name === id) || {};
  const renderUrl = () => {
    let name;
    if (presale.id) {
      if (typeof presale.isPostsale === "boolean") {
        if (presale.isPostsale) {
          name = "postsale";
        } else {
          name = "presale";
        }
      } else if (new Date(presale.end_time).getTime() < Date.now())
        name = "postsale";
    } else {
      name = "presale";
    }
    return `/${name}${presale?.id ? "/" + presale?.id : ""}`;
  };
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
      <Link to={renderUrl()}>
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
