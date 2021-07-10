import React from "react";
import Creator from "../components/Home/Creator";
import HotCreators from "../components/Home/HotCreators";
import Presale from "../components/Home/NewPresale";
import Recomended from "../components/Home/Recomended";
import Review from "../components/Home/Review";
import SearchBar from "../components/Searchbar";
const Home = () => {
  return (
    <div>
      <SearchBar />
      <Creator />
      <Recomended />
      <HotCreators />
      <Review />
      <Presale />
    </div>
  );
};

export default Home;
