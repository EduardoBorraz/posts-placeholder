import TemporaryDrawer from "@/components/Drawer/Drawer";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

interface Props {
  state: Record<"right", boolean>;
  toggleDrawer: (anchor: "right", open: boolean) => () => void;
}

export default function Form({ state, toggleDrawer }: Props) {
  return (
    <TemporaryDrawer state={state} toggleDrawer={toggleDrawer}>
      <Box component={"form"} padding={3} width={450}>
        <Typography variant="h6" marginBottom={4}>
          Add Post
        </Typography>
        <TextField label="Title" sx={{ marginBottom: 3 }} />
        <TextField label="Body" sx={{ marginBottom: 3 }} />
        <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
          <Button variant="outlined" size="small">
            Cancel
          </Button>
          <Button variant="contained" size="small">
            Save
          </Button>
        </Stack>

        <Typography variant="subtitle2">Preview</Typography>
        <Divider sx={{ marginBottom: 3 }} />

        <Card elevation={0} sx={{ border: "1px solid #e0e0e0" }}>
          <CardContent>
            <Typography variant="subtitle1" marginBottom={2}>
              Title
            </Typography>
            <Typography variant="body2" marginBottom={2}>
              Body
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </TemporaryDrawer>
  );
}
