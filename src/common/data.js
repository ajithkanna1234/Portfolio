import Profile from "@/profile/Profile";
import Project from "@/project/Project";
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
