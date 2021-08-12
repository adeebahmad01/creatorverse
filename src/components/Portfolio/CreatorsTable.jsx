import React from "react";
import HoverableTableRow from "./../utils/Popover";
import { useData } from "../../context/DataContext";

const CreatorsTable = ({ state }) => {
  const { activeUser } = useData();
  return (
    <div className="py-4">
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr align="center" className="active">
              <th>Creator</th>
              <th>Points</th>
              <th>Price Per Point($)</th>
              <th>Market Value($)</th>
              <th>Day Gain(%)</th>
              <th>Gain All time(%)</th>
            </tr>
          </thead>
          <tbody>
            {activeUser.creators_subscribed.map((el, i) => (
              <HoverableTableRow {...el} state={state} i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatorsTable;
