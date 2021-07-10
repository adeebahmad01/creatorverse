import React from "react";
import CreatorDetails from "../components/RewardBay/CreatorDetails";
import Creators from "../components/RewardBay/Creators";
import UserName from "../components/RewardBay/UserName";
import SuggestReward from "../components/RewardBay/SuggestReward";

const RewardBay = () => {
  return (
    <div>
      <UserName />
      <Creators />
      <CreatorDetails />
      <SuggestReward />
    </div>
  );
};

export default RewardBay;
