import React from "react";
import RewardCard from "./../components/utils/RewardCard";
import reward from "../JSON/reward.json";
import Radeem from "../components/Radeem/Radeem";

const RadeemRewards = () => {
  return (
    <div className="py-5">
      <RewardCard {...reward} export />
      <Radeem />
    </div>
  );
};

export default RadeemRewards;
