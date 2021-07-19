import React, { createContext, createRef, useContext } from "react";
import Input from "../components/utils/Input";
import { useData } from "./DataContext";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import DragFile from "../components/utils/DragFile";
import { Typography } from "@material-ui/core";
const FunctionsContext = createContext();

export const useFunctions = () => useContext(FunctionsContext);

const FunctionsContextProvider = ({ children }) => {
  const { creators } = useData();
  class Refs {
    constructor(values = [], tags = []) {
      values.forEach((el) => {
        this[el] = {
          ref: createRef(),
          placeholder: el,
        };
      });
      tags.forEach((el) => {
        this[el.name] = {
          ref: createRef(),
          placeholder: el.name,
          ...el,
        };
      });
    }
  }
  const multiline = true;
  const rows = 4;
  const allInputs = {
    creators: {
      inputs: [
        { name: "name" },
        { name: "email", type: { name: `email` } },
        { name: "instagram", type: { name: `url` } },
        { name: "facebook", type: { name: `url` } },
        { name: "tiktok", type: { name: `url` } },
        { name: "youtube_link", type: { name: `url` } },
        { name: "nft_id" },
        { name: "bio", multiline, rows, maxlength: 500 },
        { name: "fractions_total_supply", type: { name: `number` } },
        { name: "fraction_sold_presale", type: { name: `number`, unit: "$" } },
        {
          name: "fraction_amount_postsale",
          type: { name: `number`, unit: "$" },
        },
        { name: "fraction_presale_price", type: { name: `number`, unit: "$" } },
        {
          name: "fraction_postsale_price",
          type: { name: `number`, unit: "$" },
        },
        { name: "wallet_address" },
        { name: "royality_cut", type: { name: `number`, unit: "$" } },
      ],
      images: [{ name: "profile_image" }],
      defaultFields: {
        rewards: [],
      },
    },
    investors: {
      inputs: [
        { name: "name" },
        { name: "email", type: { name: `email` } },
        { name: "wallet_address" },
        { name: "fractions_owned", type: { name: `number` } },
      ],
      images: [{ name: "profile_image" }],
      defaultFields: {
        creators_subscribed: [],
        creators_rewards: [],
      },
    },
    rewards: {
      selects: [{ name: "creators", options: creators }],
      inputs: [
        { name: "name" },
        { name: "description", multiline, rows, maxlength: 500 },
        { name: "price", type: { name: `number` } },
      ],
      images: [{ name: "image" }],
    },
    presales: {
      selects: [{ name: "creators", options: creators }],
      inputs: [
        { name: "total_fractions", type: { name: `number` } },
        { name: "price", type: { name: `number`, unit: "$" } },
        { name: "fractions_sold", type: { name: `number` } },
      ],
      defaultFields: {
        buyers: [],
      },
    },
  };
  class GetValues {
    constructor(values = {}) {
      Object.entries(values).forEach((el) => {
        this[el[0]] = `${el[1].ref.current.value}${el[1]?.type?.unit || ``}`;
      });
    }
  }

  const showTags = (tagRefs = {}, active, required = true) =>
    Object.entries(tagRefs)?.map((el, i) => (
      <div key={i} className={"col-lg-6"}>
        <label
          htmlFor={el[1].placeholder}
          className="text-capitalize fw-bolder"
        >
          {" "}
          {el[1].placeholder.split("_").join(" ")}{" "}
        </label>
        <Input
          {...el}
          ref={el[1].ref}
          required={required}
          id={el[1].placeholder}
          defaultValue={active[el[0]]}
          placeholder={el[1].placeholder.split("_").join(" ")}
          type={el[1]?.type?.name}
          step=".01"
          InputProps={{
            endAdornment: (
              <InputAdornment
                className="text-capitalize fw-bolder"
                position="end"
              >
                {el[1]?.type?.unit}
              </InputAdornment>
            ),
          }}
        />
      </div>
    ));
  const showImages = (
    images = [],
    setImages = () => {},
    active = {},
    docRef,
    setdisabled
  ) =>
    images.map((el, i) => (
      <div key={i} className={"col-lg-12"}>
        <Typography variant="h6" className="text-capitalize fw-bold mt-3">
          {" "}
          {el.name.split("_").join(" ")}{" "}
        </Typography>
        <DragFile
          size={el.size}
          type={el.type}
          setdisabled={setdisabled}
          docRef={docRef}
          name={el.name}
          active={active[el.name]?.map((preview, i) => ({
            ...preview,
            database: true,
            i,
          }))}
          setImages={(images) =>
            setImages((prev) => ({ ...prev, [el.name]: images }))
          }
        />
      </div>
    ));
  const showSelect = (selects = [], selectValues, setSelects) =>
    selects.map((el, i) => (
      <div key={i} className="col-lg-6">
        <label htmlFor={el.name} className="text-capitalize fw-bolder">
          {" "}
          {el.name.split("_").join(" ")}{" "}
        </label>
        <div className="field">
          <Select
            displayEmpty
            required
            id={el.name}
            fullWidth
            variant="standard"
            className="field_input text-capitalize"
            value={selectValues[el.name]?.name || ""}
            onChange={(e) =>
              setSelects((n) => ({ ...n, [el.name]: { name: e.target.value } }))
            }
          >
            <MenuItem disabled value="">
              <em className="text-capitalize">
                {el.name.split("_").join(" ")}
              </em>
            </MenuItem>
            {el.options.map((el) => (
              <MenuItem className="text-capitalize" value={el.id}>
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    ));
  const value = {
    Refs,
    GetValues,
    showImages,
    showTags,
    showSelect,
    allInputs,
  };
  return (
    <FunctionsContext.Provider {...{ value }}>
      {children}
    </FunctionsContext.Provider>
  );
};

export default FunctionsContextProvider;