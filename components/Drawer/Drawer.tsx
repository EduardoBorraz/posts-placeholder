import * as React from "react";
import Drawer from "@mui/material/Drawer";

type Anchor = "right";

interface Props {
  children: React.ReactNode;
  toggleDrawer: (anchor: Anchor, open: boolean) => () => void;
  state: Record<Anchor, boolean>;
}

export default function TemporaryDrawer({
  children,
  toggleDrawer,
  state,
}: Props) {
  return (
    <div>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <>{children}</>
      </Drawer>
    </div>
  );
}
