import { Button, styled } from "@mui/material";

const YcButton = styled(Button)({
  marginTop: "0rem",
  backgroundColor: "black",
  width: "100%",
  minHeight: "4rem",
  boxShadow: "none",
  fontSize: "1rem",
  padding: "0rem 2rem",
  textTransform: "none",
  fontWeight: "bold",
  [`&:hover`]: {
    backgroundColor: "black",
  },
  [`@media (max-width: 900px)`]: {
    width: "500px",
  },
  maxWidth: "300px",
});


export default YcButton
