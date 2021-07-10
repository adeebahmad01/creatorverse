import React from "react";
import CreatorInfo from "../components/Presale/CreatorInfo";
import Reward from "../components/Presale/Reward";
import Summary from "../components/utils/Summary";
import Rewards from "../components/Presale/Rewards";

const Postsale = () => {
  return (
    <div>
      <CreatorInfo />
      <Reward />
      <Summary />
      <Rewards />
    </div>
  );
};

export default Postsale;
