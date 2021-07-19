import React from "react";
import { useParams } from "react-router-dom";
import Export from "../components/ExportReward/Export";
import RewardCard from "../components/utils/RewardCard";
import { useData } from "../context/DataContext";

const ExportRewards = () => {
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
      <RewardCard {...reward} i={1} redeem />
      <Export />
    </div>
  );
};

export default ExportRewards;
