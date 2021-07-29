import React, { useState } from "react";
import Graph from "../components/Portfolio/Graph";
import UserName from "./../components/RewardBay/UserName";
import CreatorsTable from "./../components/Portfolio/CreatorsTable";
import SuggestReward from "../components/RewardBay/SuggestReward";
import CreatorDetails from "../components/RewardBay/CreatorDetails";

const Portfolio = () => {
  const state = useState(0);
  return (
    <div>
      <UserName />
      <Graph />
      <CreatorsTable state={state} />
      <CreatorDetails active={state[0]} />
      <SuggestReward portfolio active={state[0]} />
    </div>
  );
};

export default Portfolio;
