import React from "react";
import Export from "../components/ExportReward/Export";
import RewardCard from "../components/utils/RewardCard";
import reward from "../JSON/reward.json";

const ExportRewards = () => {
  return (
    <div>
      <RewardCard {...reward} radeem />
      <Export />
    </div>
  );
};

export default ExportRewards;
