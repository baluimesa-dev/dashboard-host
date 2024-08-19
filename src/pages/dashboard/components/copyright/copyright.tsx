import { Link, Typography } from "@mui/material";
import React from "react";

export const Copyright = ()=> {
  const year = new Date().getFullYear();
    return (
      <Typography variant="body2" color="text.secondary" align="center" pt={4}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>
        {` ${year}.`}
      </Typography>
    );
  }
  