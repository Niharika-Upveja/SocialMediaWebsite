import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { Stack } from "@mui/material";
const SortBySelect = ({ onSortBy, sortBy, sorts }) => {
  return (
    <Stack spacing={1}>
      <Typography
        color="text.secondary"
        variant="subtitle2"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        Sort by:
      </Typography>
      <Select
        size="small"
        value={sorts[sortBy]}
        sx={{ minWidth: 150 }}
        onChange={onSortBy}
      >
        {Object.keys(sorts).map((sortName, i) => (
          <MenuItem value={sorts[sortName]} key={i}>
            {sorts[sortName]}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default SortBySelect;
