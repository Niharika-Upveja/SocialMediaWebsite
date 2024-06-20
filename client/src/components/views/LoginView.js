import {
  Button,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/users";
import { loginUser } from "../../helpers/authHelper";

const LoginView = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(formData);
    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate("/");
    }
  };

  return (
    <Container maxWidth={"xs"} sx={{ mt: 6 }}>
      <Stack alignItems="center">
        <div>
          Login
        </div>
        <div>
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </div>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            required
            id="email"
            name="email"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            required
            id="password  "
            name="password"
            onChange={handleChange}
            type="password"
          />
          <button type="submit">
            Login
          </button>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginView;
