import React from "react";
import Graph from "../components/Portfolio/Graph";
import UserName from "./../components/RewardBay/UserName";
import CreatorsTable from "./../components/Portfolio/CreatorsTable";
import CreatorGraph from "./../components/Portfolio/CreatorGraph";

const Portfolio = () => {
  return (
    <div>
      <UserName />
      <Graph />
      <CreatorsTable />
      <CreatorGraph />
    </div>
  );
};

export default Portfolio;
