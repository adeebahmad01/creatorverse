import React from "react";
import HoverableTableRow from "./../utils/Popover";

const CreatorsTable = () => {
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
            {[1, 2, 3, 4, 5, 6].map((el, i) => (
              <HoverableTableRow i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatorsTable;
