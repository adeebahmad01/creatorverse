import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";
import React, { useState } from "react";

export default function DatePicking({ Picker = DatePicker }) {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Picker
        value={value}
        open={open}
        onClose={() => setOpen(false)}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => {
          params.inputProps.className += " px-3 py-2";
          params.InputProps.endAdornment = (
            <div style={{ transform: `translateX(-15px)` }}>
              {params.InputProps.endAdornment}
            </div>
          );
          return (
            <TextField
              onClick={() => setOpen(!open)}
              {...params}
              className="form-control border rounded-pill overflow-hidden"
              variant="standard"
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}
