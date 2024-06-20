import {
  Container,
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { signup } from "../../api/users";
import { loginUser } from "../../helpers/authHelper";
import { useNavigate } from "react-router-dom";

const SignupView = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length !== 0) return;

    const data = await signup(formData);

    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate("/");
    }
  };

  const moveToLogin = async (e) => {
    navigate("/login");
  }
  return (
    <Container maxWidth={"xs"} sx={{ mt: { xs: 2, md: 6 } }}>
      <Stack alignItems="center">
        <div variant="h5" gutterBottom>
          Sign Up
        </div>
        <div color="text.secondary">
          Already have an account? <button onClick={moveToLogin} >Login</button>
        </div>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Username"
            required
            id="username"
            name="username"
            onChange={handleChange}
          />
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
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <button type="submit">
            Sign Up
          </button>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignupView;
