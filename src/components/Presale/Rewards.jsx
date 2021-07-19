import React from "react";
import RewardCard from "../utils/RewardCard";

const Rewards = ({ rewards = [] }) => {
  return (
    <div>
      {rewards.map((el, i) => (
        <RewardCard {...el} i={i + 1} />
      ))}
    </div>
  );
};

export default Rewards;
