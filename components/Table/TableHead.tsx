import TableHeadMui from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface Props {
  columns: string[];
}
export default function TableHead({ columns = [] }: Props) {
  return (
    <TableHeadMui>
      <TableRow>
        {columns.map((column, index) => (
          <TableCell key={index}>{column}</TableCell>
        ))}
      </TableRow>
    </TableHeadMui>
  );
}
