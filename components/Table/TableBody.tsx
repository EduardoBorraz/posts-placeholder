import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBodyMui from "@mui/material/TableBody";
import { Column } from "@/models/table.model";

interface Props {
  data: Record<string, any>[];
  columns: Column[];
}

export default function TableBody({ data = [], columns }: Props) {
  return (
    <TableBodyMui>
      {data.map((item, index) => (
        <TableRow key={index}>
          {columns.map(({ id }) => (
            <TableCell key={id}>{item[id]}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBodyMui>
  );
}
