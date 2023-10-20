import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBodyMui from "@mui/material/TableBody";

interface Props {
  data: Record<string, any>[];
  columns: string[];
}

export default function TableBody({ data = [], columns }: Props) {
  return (
    <TableBodyMui>
      {data.map((item, index) => (
        <TableRow key={index}>
          {columns.map((column, colIndex) => (
            <TableCell key={colIndex}>{item[column]}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBodyMui>
  );
}
