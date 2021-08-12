import React, { useState } from "react";
import Graph from "../components/Portfolio/Graph";
import UserName from "./../components/RewardBay/UserName";
import CreatorsTable from "./../components/Portfolio/CreatorsTable";
import SuggestReward from "../components/RewardBay/SuggestReward";
import CreatorDetails from "../components/RewardBay/CreatorDetails";

const Portfolio = () => {
  const state = useState(null);
  console.log(state);
  return (
    <div>
      <UserName />
      {state[0] !== null ? <CreatorDetails active={state[0]} /> : <Graph />}
      <CreatorsTable state={state} />
    </div>
  );
};

export default Portfolio;
