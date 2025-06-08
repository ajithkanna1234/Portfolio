import Home from "@/components/home/Home";
import Project from "@/components/project/Project";
import Contact from "@/components/contact/Contact";
import Nav from "@/components/nav/Nav";
import { createRef } from "react";
// import { downloadResume } from "./downloadResume";
import { ArrowDownToLine, CircleUserRound, FolderKanban, House } from "lucide-react";

export const Data = [
  {
    id: 1,
    icon: <House />,
    label: "home",
    component: <Home />,
    className: "",
    sectionId: "home" // Add this
  },
  {
    id: 2,
    icon: <FolderKanban />,
    label: "project",
    component: <Project />,
    className: "",
    sectionId: "projects" // Add this
  },
  {
    id: 3,
    icon: <CircleUserRound />,
    label: "contact",
    component: <Contact />,
    className: "",
    sectionId: "contact" // Add this
  },
  {
    id: 4,
    icon: <ArrowDownToLine />,
    label: "resume",
  }
];