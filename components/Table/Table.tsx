import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

import Paper from "@mui/material/Paper";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

interface TableProps {
  columns: string[];
  data: Record<string, any>[];
  //itemsPerPage: number;
}

export default function BasicTable({
  columns,
  data,
}: //itemsPerPage,
TableProps) {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead columns={columns} />
        <TableBody columns={columns} data={data} />
      </Table>
    </TableContainer>
  );
}
