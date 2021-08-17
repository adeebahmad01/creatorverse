import React, { useState, useEffect } from "react";
import CreatorInfo from "../components/Presale/CreatorInfo";
import PresaleSale from "../components/Presale/PresaleSale";
import Reward from "../components/Presale/Reward";
import Rewards from "../components/Presale/Rewards";
import { useHistory, useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import { useHandling } from "../context/HandleContext";
import { db } from "../config/Firebase";

const Presale = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const { setSuccess } = useHandling();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Covert isPostsale to false in cloud firestore's presale
    await db.collection("presales").doc(id).update({
      isPostsale: true,
    });
    setSuccess(new Error("Presale successfully converted to postsale"));
    push(`/postsale/${id}`);
  };
  return (
    <div id="presale_page">
      <CreatorInfo creator={creator} presale={presale} />
      <Reward rewards={rewards} youtube_link={creator.youtube_link} />
      <PresaleSale presale={presale} />
      <Rewards rewards={rewards} />
      <div className="active_bg">
        <div className="container">
          <div className="py-5">
            <form onSubmit={handleSubmit} action="">
              <button className="btn btn-light">Convert to Postsale</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presale;
