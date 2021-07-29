import {
  InputAdornment,
  TextField,
  IconButton,
  Button,
  Paper,
  Typography,
  Box,
} from "@material-ui/core";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./login.css";
import { useHandling } from "../../context/HandleContext";
import { useAuth } from "../../context/AuthContext";
import Mail from "@material-ui/icons/Mail";

const Login = () => {
  const { login, googleLogin } = useAuth();
  const { setError } = useHandling();
  const [show, setShow] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  useEffect(() => {
    console.log({ email, password });
  }, []);
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log({ email, password });
      await login(email.current.value, password.current.value);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="centered py-5">
      <Paper className="form bg-white shadow-lg pt-3 pb-5">
        <Typography variant="h3" className="h1 mt-2 mb-4">
          
        </Typography>
        {/* <Button
          color="secondary"
          variant="contained"
          startIcon={<Mail />}
          onClick={() => googleLogin(() => {}, setError)}
        >
          Login With Google
        </Button> */}
        <form onSubmit={onSubmit}>
          <Box p={1}>
            <TextField
              label="Email"
              className="w-100"
              required
              variant="filled"
              inputRef={email}
              id="email"
              type="email"
            />
          </Box>
          <Box p={1}>
            <TextField
              inputRef={password}
              required
              variant="filled"
              id="password"
              label="Password"
              type={show ? "text" : "password"}
              className="w-100"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShow((a) => !a)}>
                      {show ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box mx={1} my={3}>
            <Box mb={2}>
              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
            </Box>
            
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
