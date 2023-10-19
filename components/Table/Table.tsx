import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

import Paper from "@mui/material/Paper";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function BasicTable() {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead />
        <TableBody />
      </Table>
    </TableContainer>
  );
}
