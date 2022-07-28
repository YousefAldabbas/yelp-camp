import { useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register, login, reset } from "../features/auth/authSlice";

import { toast } from "react-toastify";
import {
  Grid,
  Box,
  Typography,
  Stack,
  Avatar,
  TextField,
  Button,
  styled,
  CssBaseline,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
const YcTextField = styled(TextField)({
  backgroundColor: "#F7F7F7",
  border: "none",
  borderRadius: "4px",
  padding: "1rem",
  outline: "none",
  ["p#description-helper-text "]: {
    top: "100%",
    bottom: "0",
    right: "0",
    left: "68%",
    [`@media (max-width: 600px)`]: {
      top: "100%",
      bottom: "0",
      right: "0",
      left: "60%",
    },
  },
  input: {
    fontSize: "0.9rem",
  },
});

const YcLable = styled(Typography)({
  color: "#626262",
  fontSize: "1rem",
  paddingBottom: "0.5rem",
});
const YcButton = styled(Button)({
  marginTop: "0.6rem",
  backgroundColor: "black",
  width: "100%",
  minHeight: "4rem",
  boxShadow: "none",
  fontSize: "1.4rem",
  textTransform: "none",
  [`&:hover`]: {
    backgroundColor: "black",
  },
  [`@media (max-width: 900px)`]: {
    width: "500px",
  },
  maxWidth: "100%",
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
const initialValues = {
  username: "",
  password: "",
};
function LoginForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const isLoginPage = path === "/signin";
  const { user, isSuccess, isError, } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (user && user.username) {
      navigate("/home");
    }
    if (isSuccess && user) {
      toast.success(`welcome ${user.username}!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/home");
    }
    if (isError) {
      toast.error("username or password isn't valid");
    }
    return () => {
      dispatch(reset());
    };
  }, [user, isError]);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (isLoginPage) {
        dispatch(login(values));
      } else {
        dispatch(register(values));
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <CssBaseline />
      <Grid
        container
        spacing={2}
        sx={{
          mt: {
            xs: "1rem",
            sm: "2rem",
            md: "4rem",
            lg: "5rem",
          },
        }}
      >
        <Grid item xs={12}>
          <Stack
            sx={{
              alignItems: "center",
              mb: {
                xs: 4,
                sm: 5,
                lg: "0.4rem",
              },
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Start exploring camps from all around the world.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <YcLable variant="h5">Username</YcLable>
          <YcTextField
            name="username"
            type="text"
            variant="standard"
            placeholder="Jhondoe_91"
            InputProps={{
              disableUnderline: true,
            }}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
        </Grid>
        <Grid item xs={12}>
          <YcLable variant="h5">Password</YcLable>
          <YcTextField
            name="password"
            type="password"
            variant="standard"
            placeholder="Enter Your Password"
            InputProps={{
              disableUnderline: true,
            }}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </Grid>
        <Grid item xs={12}>
          <YcButton variant="contained" color="primary" type="submit">
            {isLoginPage ? "Login" : "Create an account"}
          </YcButton>
          {isLoginPage ? (
            <Typography
              variant="h6"
              fontWeight="bold"
              fontSize="0.9rem"
              sx={{
                mt: 1,
                fontSize: {
                  xs: "1rem",
                  md: "1rem",
                },
                color: "#8E8E8E",
              }}
            >
              Not a user yet? <a href="/signup">Create an account</a>
            </Typography>
          ) : (
            <Typography
              variant="h6"
              fontWeight="bold"
              fontSize="0.9rem"
              sx={{
                mt: 1,
                fontSize: {
                  xs: "1rem",
                  md: "1rem",
                },
                color: "#8E8E8E",
              }}
            >
              Already a user? <a href="/signin">Sign in</a>
            </Typography>
          )}
        </Grid>
      </Grid>
    </form>
  );
}

export default LoginForm;
