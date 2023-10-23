import TableHeadMui from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Column } from "@/models/table.model";

interface Props {
  columns: Column[];
}
export default function TableHead({ columns = [] }: Props) {
  return (
    <TableHeadMui>
      <TableRow>
        {columns.map((column, index) => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHeadMui>
  );
}
