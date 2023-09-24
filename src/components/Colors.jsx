import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

export const Colors = () => {
  const [fruit, setFruit] = useState(["Yellow", "Skyblue", "Brown", "Green"]);

  return (
    <Grid
      container
      spacing={2}
      sx={{ bgcolor: "lightseagreen", marginTop: "10px", padding: "10px" }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Colors Name
        </Typography>
      </Grid>

      {fruit.map((item) => (
        <Grid item xs={3}>
          <Typography
            variant="h5"
            xs={3}
            sx={{ bgcolor: "white", height: "100px" }}
          >
            {item}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
