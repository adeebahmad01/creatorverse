import React, { useState, useEffect } from "react";
import CreatorInfo from "../components/Presale/CreatorInfo";
import Reward from "../components/Presale/Reward";
import Summary from "../components/utils/Summary";
import Rewards from "../components/Presale/Rewards";
import { useHistory, useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import firebase, { db } from "../config/Firebase";
import { useHandling } from "../context/HandleContext";
import ReactPlayer from "react-player";
const Postsale = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const {
    creators = [],
    presales = [],
    rewards: rewardsAll = [],
    activeUser = {},
  } = useData();
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
    await db
      .collection("presales")
      .doc(id)
      .update({
        isPostsale: firebase.firestore.FieldValue.delete(),
        end_time: new Date(Date.now() + 86400000).toISOString(),
      });
    setSuccess(new Error("Postsale successfully converted to presale"));
    push(`/presale/${id}`);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <CreatorInfo creator={creator} presale={presale} />
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-end">
            <div className="col-12 d-flex p-3 rounded-5 justify-content-center align-items-center">
              <div className="p-3 w-100 rounded-5 border border-2 colored-border">
                <ReactPlayer className="objfit" url={creator.youtube_link} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <Reward
              creatorId={creator.id}
              rewards={rewards}
              youtube_link={creator.youtube_link}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>

      <Summary creator={creator} />
      <Rewards rewards={rewards} />
    </div>
  );
};

export default Postsale;
