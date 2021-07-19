import React from "react";
import RewardCard from "../components/utils/RewardCard";
import Redeem from "../components/Redeem/Redeem";
import { useData } from "../context/DataContext";
import { useParams } from "react-router-dom";

const RadeemRewards = () => {
  const { id } = useParams();
  const { rewards } = useData();
  const [reward, setReward] = React.useState(null);
  React.useEffect(() => {
    if (id) {
      setReward(rewards.find((r) => r.id === id));
    }
  }, [id, rewards]);
  return (
    <div className="py-5">
      <RewardCard {...reward} i={1} export />
      <Redeem {...reward} />
    </div>
  );
};

export default RadeemRewards;
