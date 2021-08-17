import React, { useState, useEffect } from "react";
import CreatorInfo from "../components/Presale/CreatorInfo";
import Reward from "../components/Presale/Reward";
import Summary from "../components/utils/Summary";
import Rewards from "../components/Presale/Rewards";
import { useHistory, useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import { db } from "../config/Firebase";
import { useHandling } from "../context/HandleContext";
const Postsale = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const { creators = [], presales = [], rewards: rewardsAll = [] } = useData();
  const { setSuccess } = useHandling();
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
      isPostsale: false,
    });
    setSuccess(new Error("Postsale successfully converted to presale"));
    push(`/presale/${id}`);
  };
  return (
    <div>
      <CreatorInfo creator={creator} presale={presale} />
      <Reward
        creatorId={creator.id}
        rewards={rewards}
        youtube_link={creator.youtube_link}
      />
      <Summary />
      <Rewards rewards={rewards} />
      <div className="active_bg">
        <div className="container">
          <div className="py-5">
            <form onSubmit={handleSubmit} action="">
              <button className="btn btn-light">Convert to Presale</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postsale;
