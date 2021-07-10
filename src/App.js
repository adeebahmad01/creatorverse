import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Presale from "./pages/presale";
import RewardBay from "./pages/rewardbay";
import Home from "./pages";
import "bootstrap/dist/js/bootstrap.min";
import Navbar from "./components/Navbar";
import Postsale from "./pages/postsale";
import Profile from "./pages/profile";
import ExportRewards from "./pages/exportRewards";
import RadeemRewards from "./pages/radeemRewards";
import ViewReward from "./pages/viewReward";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/rewardbay" component={RewardBay} />
        <Route path="/presale" component={Presale} />
        <Route path="/postsale" component={Postsale} />
        <Route path="/profile" component={Profile} />
        <Route path="/export_rewards" component={ExportRewards} />
        <Route path="/radeem_rewards" component={RadeemRewards} />
        <Route path="/view_reward" component={ViewReward} />
      </Switch>
    </Router>
  );
}

export default App;
