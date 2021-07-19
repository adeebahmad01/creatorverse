import React, { useState, useEffect } from "react";
import CreatorInfo from "../components/Presale/CreatorInfo";
import PresaleSale from "../components/Presale/PresaleSale";
import Reward from "../components/Presale/Reward";
import Rewards from "../components/Presale/Rewards";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

const Presale = () => {
  const { id } = useParams();
  const { creators = [], presales = [], rewards: rewardsAll = [] } = useData();
  const [creator, setCreator] = useState({});
  const [presale, setPrsale] = useState({});
  const [rewards, setRewards] = useState([]);
  useEffect(() => {
    if (id) {
      const presale = presales.find((presale) => presale.id === id);
      if (presale) {
        setPrsale(presale);
      }
    }
  }, [id, presales]);
  useEffect(() => {
    if (presale.creators?.name) {
      const creator = creators.find(
        (creator) => creator.id === presale.creators?.name
      );
      if (creator) {
        setCreator(creator);
      }
    }
  }, [presale, creators]);
  useEffect(() => {
    if (creator.id) {
      setRewards(
        rewardsAll.filter((reward) => {
          return reward?.creators?.name === creator.id;
        })
      );
    }
  }, [presale, creator, rewardsAll]);
  return (
    <div>
      <CreatorInfo creator={creator} presale={presale} />
      <Reward rewards={rewards} youtube_link={creator.youtube_link} />
      <PresaleSale presale={presale} />
      <Rewards rewards={rewards} />
    </div>
  );
};

export default Presale;
