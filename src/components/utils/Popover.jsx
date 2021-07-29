import Popover from "@material-ui/core/Popover";
import React, { useState, useEffect } from "react";
import { useData } from "../../context/DataContext";
export default function HoverableTableRow({
  creatorId,
  market_value,
  day_gain,
  gain,
  fractions_owned,
  price,
  state,
  i,
}) {
  const { creators = [], presales } = useData();
  const [, setActive] = state;
  const [creator, setCreator] = useState({});
  useEffect(() => {
    if (creatorId) {
      setCreator(creators.find((creator) => creator.id === creatorId) || {});
    }
  }, [creatorId, creators]);
  const presale = presales.find(
    (presale) => presale.creators.name === creator.id
  );
  return (
    <tr
      align="center"
      onClick={() => setActive(i)}
      style={{ fontWeight: `500`, verticalAlign: `middle`, cursor: `pointer` }}
    >
      <td align="left">
        <div
          className="my-2 me-2"
          style={{ width: "70px", display: `inline-block` }}
        >
          <img
            className="rounded-5 w-100 objfit shadow-sm d-inline-block"
            src={creator.profile_image?.[0].src}
            alt={creator.name}
          />
        </div>
        {creator.name}
      </td>
      <td>{fractions_owned}</td>
      <td>{(fractions_owned * price).toLocaleString()}</td>
      <td>{(market_value || 0).toFixed(2)}</td>
      <td>{(day_gain || 0).toFixed(2)}</td>
      <td>{(gain || 0).toFixed(2)}</td>
    </tr>
  );
}
