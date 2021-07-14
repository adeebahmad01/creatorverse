import React, { createContext, useContext, useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const HandleContext = createContext();

const useHandling = () => useContext(HandleContext);

const HandleContextProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (success) {
      setError(false);
      clearTimeout(window.success);
      window.success = setTimeout(() => setSuccess(false), 6000);
    }
  }, [success]);
  useEffect(() => {
    if (error) {
      setSuccess(false);
      clearTimeout(window.error);
      window.error = setTimeout(() => setError(false), 6000);
    }
  }, [error]);
  const handleClose = (reason, setOpen) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  return (
    <HandleContext.Provider
      value={{ setSuccess, setError, loading, setLoading }}
    >
      {children}
      <Snackbar
        open={success && true}
        autoHideDuration={6000}
        onClose={(e, r) => handleClose(r, setSuccess)}
      >
        <Alert
          onClose={(e, r) => handleClose(r, setSuccess)}
          severity="success"
        >
          {success.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={error && true}
        autoHideDuration={6000}
        onClose={(e, r) => handleClose(r, setError)}
      >
        <Alert onClose={(e, r) => handleClose(r, setError)} severity={"error"}>
          {error.message}
        </Alert>
      </Snackbar>
    </HandleContext.Provider>
  );
};
export { useHandling };
export default HandleContextProvider;
