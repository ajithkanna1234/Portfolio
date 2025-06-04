import Profile from "@/components/profile/Profile";
import Project from "@/components/project/Project";
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
