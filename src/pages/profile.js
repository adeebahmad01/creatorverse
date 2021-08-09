import React, { useState, useEffect } from "react";
import CreatorInfo from "../components/Presale/CreatorInfo";
import About from "../components/Profile/About";
import Profiles from "../components/Profile/Profiles";
import Slides from "../components/Profile/Slides";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

const Profile = () => {
  const { id } = useParams();
  const { creators = [], presales = [] } = useData();
  const [creator, setCreator] = useState({});
  const [presale, setPrsale] = useState({});
  useEffect(() => {
    if (id) {
      const creator = creators.find((creator) => creator.id === id);
      if (creator) {
        setCreator(creator);
      }
    }
  }, [id, creators]);
  useEffect(() => {
    if (creator.id) {
      const presale = presales.find(
        (presale) => presale.creators?.name === creator.id
      );
      if (presale) {
        setPrsale(presale);
      }
    }
  }, [creator, presales]);
  console.log(presale);
  return (
    <div>
      <CreatorInfo isProfile creator={creator} presale={presale} />
      <About />
      <Slides />
      <Profiles />
    </div>
  );
};

export default Profile;
