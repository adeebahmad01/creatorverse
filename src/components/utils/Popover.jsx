import React, { useState, useEffect } from "react";
import { useData } from "../../context/DataContext";
export default function HoverableTableRow({
  creatorId,
  day_gain,
  gain,
  points_owned,
  state,
  i,
}) {
  const { creators = [], presales } = useData();
  // Generate random number between 5 and 20 function
  const randomNumber = () => Math.floor(Math.random() * (20 - 5 + 1)) + 5;
  const [, setActive] = state;
  const [creator, setCreator] = useState({});
  const [name, setName] = useState("presale");
  const [presale, setPresale] = useState({});
  useEffect(() => {
    const presale = presales.find(
      (presale) => presale.creators?.name === creatorId
    );
    setPresale(presale);
  }, [presales, creatorId]);
  useEffect(() => {
    if (creatorId) {
      setCreator(creators.find((creator) => creator.id === creatorId) || {});
    }
  }, [creatorId, creators]);
  useEffect(() => {
    if (presale?.id) {
      if (typeof presale.isPostsale === "boolean") {
        if (presale.isPostsale) {
          setName("postsale");
        } else {
          setName("presale");
        }
      } else if (new Date(presale.end_time).getTime() < Date.now())
        setName("postsale");
      else setName("presale");
    } else {
      setName("presale");
    }
  }, [presale]);
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
            src={
              creator.profile_image?.[0].src ||
              "data:image/jpeg;base64,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"
            }
            alt={creator.name}
          />
        </div>
        {creator.name || "Creator Not Found"}
      </td>
      <td>{points_owned}</td>
      <td>
        ${creator?.[`fraction_${name}_price`]?.split("$")?.[0].toLocaleString()}
      </td>
      <td>
        $
        {(
          points_owned * creator?.[`fraction_${name}_price`]?.split("$")?.[0] ||
          0
        ).toLocaleString()}
      </td>
      <td>{(day_gain || randomNumber()).toFixed(2)}%</td>
      <td>{(gain || randomNumber()).toFixed(2)}%</td>
    </tr>
  );
}
