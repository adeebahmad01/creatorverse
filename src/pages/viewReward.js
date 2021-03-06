import React from "react";
import RewardCard from "../components/utils/RewardCard";
// import reward from "../JSON/reward.json";
import Details from "../components/ViewReward/Details";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

const ViewReward = () => {
  const { id } = useParams();
  const { rewards } = useData();
  const [reward, setReward] = React.useState(null);
  React.useEffect(() => {
    if (id) {
      setReward(rewards.find((r) => r.id === id));
    }
  }, [id, rewards]);

  return (
    <div>
      <RewardCard {...reward} i={1} export details redeem />
      <Details />
    </div>
  );
};

export default ViewReward;
