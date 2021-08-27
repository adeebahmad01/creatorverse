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
  const {
    creators = [],
    presales = [],
    rewards: rewardsAll = [],
    activeUser = {},
  } = useData();
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
        rewardsAll
          .filter((reward) => {
            return reward?.creators?.name === creator.id;
          })
          .sort((a, b) => {
            const personActive =
              (activeUser?.creators_subscribed || []).find(
                (el) => el.creatorId === a?.creators?.name
              ) || {};
            const personActive2 =
              (activeUser?.creators_subscribed || []).find(
                (el) => el.creatorId === b?.creators?.name
              ) || {};
            return (
              ((personActive2.points_owned || 0) / b.price) * 100 -
              ((personActive.points_owned || 0) / a.price) * 100
            );
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
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
            <PresaleSale presale={presale} />
          </div>
          <div className="col-md-6">
            <CreatorInfo creator={creator} presale={presale} />
            <Reward
              handleSubmit={handleSubmit}
              rewards={rewards}
              youtube_link={creator.youtube_link}
            />
          </div>
        </div>
      </div>
      <Rewards rewards={rewards} />
    </div>
  );
};

export default Presale;
