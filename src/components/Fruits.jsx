import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

export const Fruits = () => {
  const [fruit, setFruit] = useState([
    "apple",
    "Mango",
    "Banana",
    "Orange",
    "Kiwi",
    "Cherry",
  ]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        
        <Typography variant="h5" align="center" gutterBottom>
          Fruits Name
        </Typography>
      </Grid>
      {fruit.map((item) => (
        <Grid item xs={2}>
          <Typography variant="h5">{item}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};
