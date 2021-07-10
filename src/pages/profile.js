import React from "react";
import CreatorInfo from "../components/Presale/CreatorInfo";
import About from "../components/Profile/About";
import Profiles from "../components/Profile/Profiles";
import Slides from "../components/Profile/Slides";

const Profile = () => {
  return (
    <div>
      <CreatorInfo />
      <About />
      <Slides />
      <Profiles />
    </div>
  );
};

export default Profile;
