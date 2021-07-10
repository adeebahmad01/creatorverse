import React from "react";
import CreatorInfo from "../components/Presale/CreatorInfo";
import PresaleSale from "../components/Presale/PresaleSale";
import Reward from "../components/Presale/Reward";
import Rewards from "../components/Presale/Rewards";
import RewardCard from "../components/utils/RewardCard";
import Summary from "../components/utils/Summary";

const Presale = () => {
  return (
    <div>
      <CreatorInfo />
      <Reward />
      <PresaleSale />
      <Rewards />
    </div>
  );
};

export default Presale;
