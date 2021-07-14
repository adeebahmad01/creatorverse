import React, { useState, forwardRef } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    width: `100%`,
    height: `48px`,
    background: `#b3b2b250`,
    outline: `0`,
    fontSize: `0.875rem`,
    borderRadius: `20px`,
    color: `var(--color_1)`,
    padding: `0 16px`,
    transition: `background 0.3s`,
    lineHeight: `50px`,
    overflow: `hidden`,
    border: `1px solid #0000`,
    "& input,& div": {
      height: `100%`,
      padding: 0,
    },
    "& ::placeholder": {
      textTransform: `capitalize`,
    },
  },
}));

const Input = ({ password = false, type, ...rest }, ref) => {
  const [passType, setPassType] = useState(type);
  const { input } = useStyles();
  const setType = () => {
    if (password) {
      setPassType((pt) => (pt === "password" ? "text" : "password"));
    }
  };
  return (
    <div className="field">
      <TextField
        inputRef={ref}
        variant="standard"
        type={passType}
        {...rest}
        className={input}
      />
      {password ? (
        <span
          onClick={setType}
          className="d-inline-block position-absolute pass_wrapper"
        >
          <svg
            width="26"
            style={{
              fill: passType === "text" && password ? "#2998ff" : "#999",
            }}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M510.096,249.937c-4.032-5.867-100.928-143.275-254.101-143.275C124.56,106.662,7.44,243.281,2.512,249.105
			c-3.349,3.968-3.349,9.792,0,13.781C7.44,268.71,124.56,405.329,255.995,405.329S504.549,268.71,509.477,262.886
			C512.571,259.217,512.848,253.905,510.096,249.937z M255.995,383.996c-105.365,0-205.547-100.48-230.997-128
			c25.408-27.541,125.483-128,230.997-128c123.285,0,210.304,100.331,231.552,127.424
			C463.013,282.065,362.256,383.996,255.995,383.996z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M255.995,170.662c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333
			S303.056,170.662,255.995,170.662z M255.995,319.996c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64
			S291.28,319.996,255.995,319.996z"
                />
              </g>
            </g>
          </svg>
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default forwardRef(Input);
