import React, { Component, createContext, useContext } from "react";
import { db } from "../config/Firebase";
const DataContext = createContext();

export const useData = () => useContext(DataContext);
const values = ["creators", "investors", "presales", "rewards"];
class State {
  constructor(values = []) {
    values.forEach((el) => {
      this[el] = [];
      this[`${el}Loaded`] = false;
    });
  }
}

class DataContextProvider extends Component {
  state = {
    ...new State(values),
    activeUser: {},
    pageLoaded: false,
    allLoaded: false,
  };
  getData = (type, typeLoaded) => {
    this.setState({ [typeLoaded]: false });
    db.collection(type).onSnapshot((d) => {
      this.setState({
        [type]: d.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        [typeLoaded]: true,
      });
    });
  };
  componentDidMount() {
    values.forEach((el) => this.getData(el, el + "Loaded"));
    window.addEventListener("load", () => this.setState({ pageLoaded: true }));
  }

  delete = (collection, id, reject) => {
    db.collection(collection).doc(id).delete().catch(reject);
  };
  UNSAFE_componentWillUpdate(prevProps, prevState) {
    const { pageLoaded, allLoaded } = prevState;

    if (
      !values.map((el) => prevState[`${el}Loaded`]).includes(false) &&
      pageLoaded &&
      !allLoaded
    ) {
      this.setState({ allLoaded: true });
      const el = document.querySelector(".loader_wrapper");
      el.classList.add("hide");
      setTimeout(() => el.remove(), 1000);
    }
  }
  setActiveUser = (activeUser) => this.setState({ activeUser });
  get = (a) => a.current.value;
  render() {
    return (
      <DataContext.Provider
        value={{ ...this.state, values, setActiveUser: this.setActiveUser }}
      >
        {this.state.allLoaded && this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
