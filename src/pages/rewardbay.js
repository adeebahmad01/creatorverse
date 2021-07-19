import React from "react";
import CreatorDetails from "../components/RewardBay/CreatorDetails";
import Creators from "../components/RewardBay/Creators";
import UserName from "../components/RewardBay/UserName";
import SuggestReward from "../components/RewardBay/SuggestReward";

const RewardBay = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div>
      <UserName />
      <Creators active={active} setActive={setActive} />
      <CreatorDetails active={active} />
      <SuggestReward active={active} />
    </div>
  );
};

export default RewardBay;
