import React from 'react'
import {
    Box
} from '@mui/material'
import Logo from "../assets/Logo.svg"
function Footer() {
  return (
    <Box component="div"
    sx={{
        marginTop: "2rem",
    }}
    >
    <Box component="img" src={Logo}></Box>
  </Box>
  )
}

export default Footer