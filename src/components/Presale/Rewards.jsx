import React from "react";
import rewards from "../../JSON/rewards.json";
import RewardCard from "../utils/RewardCard";

const Rewards = () => {
  return (
    <div>
      {rewards.map((el) => (
        <RewardCard {...el} />
      ))}
    </div>
  );
};

export default Rewards;
