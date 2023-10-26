import { useState } from "react";

type Anchor = "right";
export const useDrawer = (
  initialState: Record<Anchor, boolean> = { right: false }
) => {
  const [state, setState] = useState(initialState);

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

  return { state, toggleDrawer };
};
