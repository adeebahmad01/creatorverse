import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
import DataContextProvider from "./context/DataContext";
import FunctionsContextProvider from "./context/FunctionsContext";
import AuthContextProvider, { useAuth } from "./context/AuthContext";
import Dashboard from "./components/Dashboard/index";
import Login from "./components/Login/index";
import HandleContextProvider from "./context/HandleContext";
import Add from "./components/Dashboard/Add";
import FnT from "./components/Dashboard/FnT";
const PrivateRoutes = ({ component: Comp, ...rest }) => {
  const { isAuth } = useAuth();
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? <Comp {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const PublicRoutes = ({ component: Comp, restricted = false, ...rest }) => {
  const { isAuth } = useAuth();
  return (
    <Route
      {...rest}
      component={(props) =>
        restricted ? (
          isAuth ? (
            <Redirect to="/dashboard" />
          ) : (
            <Comp {...props} />
          )
        ) : (
          <Comp {...props} />
        )
      }
    />
  );
};

function App() {
  return (
    <HandleContextProvider>
      <DataContextProvider>
        <FunctionsContextProvider>
          <AuthContextProvider>
            <Router>
              <Navbar />
              <Switch>
                <PublicRoutes exact path="/" exact component={Home} />
                <PublicRoutes exact path="/portfolio" component={Portfolio} />
                <PublicRoutes exact path="/rewardbay" component={RewardBay} />
                <PublicRoutes exact path="/presale" component={Presale} />
                <PublicRoutes exact path="/postsale" component={Postsale} />
                <PublicRoutes exact path="/profile" component={Profile} />
                <PublicRoutes
                  exact
                  path="/export_rewards"
                  component={ExportRewards}
                />
                <PublicRoutes
                  exact
                  path="/radeem_rewards"
                  component={RadeemRewards}
                />
                <PublicRoutes
                  exact
                  path="/view_reward"
                  component={ViewReward}
                />
                <PublicRoutes
                  restricted
                  exact
                  path="/login"
                  component={Login}
                />
                <PrivateRoutes exact path="/dashboard" component={Dashboard} />
                <PrivateRoutes
                  exact
                  path="/panel/:input/create"
                  component={Add}
                />
                <PrivateRoutes
                  exact
                  path="/panel/:input/preview"
                  component={FnT}
                />
                <PrivateRoutes
                  exact
                  path="/panel/:input/modify/:id"
                  component={Add}
                />
              </Switch>
            </Router>
          </AuthContextProvider>
        </FunctionsContextProvider>
      </DataContextProvider>
    </HandleContextProvider>
  );
}

export default App;
