import { Grid, Stack } from "@mui/material";
import React from "react";

const GridLayout = (props) => {
  const { left, right } = props;

  return (
    <Grid container spacing={2}>
      <Grid>
        {left}
      </Grid>
      <Grid>
        {right}
      </Grid>
    </Grid>
  );
};

export default GridLayout;
