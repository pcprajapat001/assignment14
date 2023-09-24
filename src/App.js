import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { Fruits } from "./components/Fruits";
import { Colors } from "./components/Colors";

function App() {
  return (
    <Card sx={{ bgcolor: "lightsalmon" }}>
      <CardContent>
        <Fruits></Fruits>
        <Colors></Colors>
      </CardContent>
    </Card>
  );
}

export default App;
