import React from 'react'
import { Box } from "@mui/material"
import Logo from "../assets/Logo.svg"
function YcLogo() {
  return (
    <Box
    component="img"
    alt="logo"
    src={Logo}
    sx={{
      width: {
        sx: "100%",
        sm: "200px",
        md: "130px",
        lg: "130px",
      },
    }}
  />
  )
}

export default YcLogo