import React from "react";
import RewardCard from "../components/utils/RewardCard";
import reward from "../JSON/reward.json";
import Details from "../components/ViewReward/Details";

const ViewReward = () => {
  return (
    <div>
      <RewardCard {...reward} export details radeem />
      <Details />
    </div>
  );
};

export default ViewReward;
