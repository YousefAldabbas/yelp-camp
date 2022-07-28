import { styled, Button, Typography } from "@mui/material";
const YcButtonRoot = styled(Button)({
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

const YcButton = ({ children, ...props }) => {
  return (
    <YcButtonRoot {...props}>
        {children}
    </YcButtonRoot>
  );
};

export default YcButton;
