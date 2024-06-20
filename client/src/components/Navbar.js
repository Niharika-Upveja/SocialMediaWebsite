import { useTheme } from "@emotion/react";
import {
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "react-icons/ai";
import "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../helpers/authHelper";

const Navbar = () => {
  const navigate = useNavigate();
  const user = isLoggedIn();
  const theme = useTheme();
  const username = user && isLoggedIn().username;
  const [search, setSearch] = useState("");
  const [searchIcon, setSearchIcon] = useState(false);
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const mobile = width < 500;
  const navbarWidth = width < 600;

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const handleLogout = async (e) => {
    logoutUser();
    navigate("/login");
  };


  const GoToHome = (e) => {
    navigate("/");
  }

  const GoToMessage = (e) => {
    navigate("/messenger");
  }

  const GoToUser = (e) => {
    navigate("/users/"+username);
  }

  const GoToSignup = (e) => {
    navigate("/signup");
  }

  const GoToLogin = (e) => {
    navigate("/login");
  }
  return (
    <Stack mb={2}>
        <Stack>
          <button onClick={GoToHome}>
            Home
          </button>
          {user ? (
            <>
              <button onClick={GoToMessage}>
                Message
              </button>
              <button onClick={GoToUser}>
                Me
              </button>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={GoToSignup}>
                Sign Up
              </button>
              <button onClick={GoToLogin}>
                Login
              </button>
            </>
          )}
        </Stack>
    </Stack>
  );
};

export default Navbar;
