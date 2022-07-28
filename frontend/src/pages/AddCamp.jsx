import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createCamp, reset } from "../features/camp/campSlice";
import {
  CssBaseline,
  InputAdornment,
  IconButton,
  Container,
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  styled,
  Grid,
} from "@mui/material";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";
const YcButton = styled(Button)({
  backgroundColor: "black",
  minHeight: "4rem",
  boxShadow: "none",
  fontSize: "1.1rem",
  textTransform: "none",
  padding: "0rem 1rem",
  marginTop: "1rem",
  color: "white",
  fontWeight: "bold",
  [`&:hover`]: {
    backgroundColor: "black",
  },
  width: "100%",
});
const YcTextField = styled(TextField)({
  backgroundColor: "#F7F7F7",
  border: "none",
  borderRadius: "4px",

  padding: "1rem",
  outline: "none",
  [`.css-1wc848c-MuiFormHelperText-root,p`]: {
    top: "100%",
    bottom: "0",
    right: "0",
    left: "75%",
    position: "absolute",
    color: "red ",
    backgroundColor: "white",
    width: "100%",
    padding: "0.2rem 0.5rem",
    margin: "0rem",
    maxWidth: "fit-content",
    [`@media (max-width: 600px)`]: {
      top: "100%",
      bottom: "0",
      right: "0",
      left: "63%",
    },
  },
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
    fontSize: "0.95rem",
  },
});
const YcLable = styled(Typography)({
  color: "#626262",
  fontSize: "1rem",
  paddingBottom: "0.5rem",
});

const YcGrid = styled(Grid)({
  margin: "0.3rem 0",
});
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .strict(true)
    .required("name is required")
    .trim("remove extra spaces"),
  price: Yup.number()
    .required("price is required")
    .min(1, "Unvalid price")
    .max(1500, "Unvalid price"),
  image: Yup.string()
    .required("image is required")
    .matches(
      /\.(jpg|jpeg|png|webp|avif|gif|svg)$/g,
      "image url is not valid"
    ),
  description: Yup.string().required("description is required"),
});
const initialValues = {
  name: "",
  price: "",
  image: "",
  description: "",
};

function AddCamp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError,campgrounds } = useSelector((state) => state.camp);


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // remove two spaces or more
      const newValues = {
        ...values,
        name: values.name.replace(/  +/g, " "),
        image: values.image.replace(/  +/g, " "),
        description: values.description.replace(/  +/g, " "),
      };
      // remove spaces at the beginning and end of the string

      dispatch(createCamp(newValues));
      navigate("/home");
    },
  });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <form onSubmit={formik.handleSubmit} style={{}}>
          <Grid
            container
            sx={{
              maxWidth: {
                xs: "100%",
                sm: "100%",
                md: "460px",
                lg: "460px",
              },
            }}
          >
            <YcGrid
              item
              xs={12}
              sx={{
                mt: 0,
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: {
                    xl: "1rem",
                    xs: "1.8rem",
                  },
                }}
              >
                Add New Campground
              </Typography>
            </YcGrid>
            <YcGrid item xs={12}>
              <YcLable variant="h5" component="h2">
                Campground Name
              </YcLable>

              <YcTextField
                id="name"
                name="name"
                type="text"
                variant="standard"
                fullWidth
                sx={
                  {
                    // maxWidth: {
                    //   xs: "88%",
                    //   sm: "100%",
                    //   md: "460px",
                    //   lg: "460px",
                    // },
                  }
                }
                placeholder="Seven Sisters Waterfall"
                autoComplete="off"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.name && formik.errors.name}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </YcGrid>
            <YcGrid item xs={12}>
              <YcLable variant="h5" component="h2">
                Price
              </YcLable>

              <YcTextField
                id="price"
                name="price"
                type="number"
                variant="standard"
                autoComplete="off"
                placeholder="$149"
                fullWidth
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.price && formik.errors.price}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </YcGrid>
            <YcGrid item xs={12}>
              <YcLable variant="h5" component="h2">
                Image
              </YcLable>
              <YcTextField
                id="image"
                name="image"
                type="text"
                variant="standard"
                autoComplete="off"
                fullWidth
                placeholder="https://www.thepianoytraveler.com/2018/01/mt-ulap-diy-dayhike.html"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.image && formik.errors.image}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </YcGrid>
            <YcGrid item xs={12}>
              <YcLable variant="h5" component="h2">
                Description
              </YcLable>
              <YcTextField
                id="description"
                name="description"
                type="text"
                autoComplete="off"
                variant="standard"
                multiline
                rows={7}
                placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in More og Romsdal county, Norway."
                fullWidth
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={
                  formik.touched.description && formik.errors.description
                }
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  textarea: {
                    fontSize: "0.95rem",
                  },
                }}
              />
            </YcGrid>
            <YcGrid item xs={12}>
              <YcButton type="submit">Add Campground</YcButton>
            </YcGrid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default AddCamp;
