import React from "react";
import HoverableTableRow from "./../utils/Popover";
import { useData } from "../../context/DataContext";

const CreatorsTable = () => {
  const { activeUser } = useData();
  return (
    <div>
      <div className="container">
        <table class="table table-striped">
          <thead>
            <tr align="center" className="active">
              <th>Creator</th>
              <th>Fraction</th>
              <th>Cost($)</th>
              <th>Market Value($)</th>
              <th>Day Gain(%)</th>
              <th>Gain All time(%)</th>
            </tr>
          </thead>
          <tbody>
            {activeUser.creators_subscribed.map((el, i) => (
              <HoverableTableRow {...el} i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatorsTable;
