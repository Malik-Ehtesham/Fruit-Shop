import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationButton = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" color="error" />
    </Stack>
  );
};

export default PaginationButton;
