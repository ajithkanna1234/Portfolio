import Profile from "@/components/pages/Profile";
import Project from "@/components/pages/Project";
import { createRef } from "react";

const Data = [
  {
    element: <Profile />,
    target: "profile",
    ref: createRef(),
  },
  {
    element: <Project />,
    target: "project",
    ref: createRef(),
  },
];

export default Data;
