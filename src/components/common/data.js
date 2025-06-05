import Home from "@/components/home/Home";
import Project from "@/components/project/Project";
import Contact from "@/components/contact/Contact";
import Nav from "@/components/nav/Nav";
import { createRef } from "react";
import { downloadResume } from "./downloadResume";

export const tabs = [
  { id: 0,element:<Nav/> , className:"fixed top-2 w-4/5 "},
  { id: 1, route: "home" ,element:<Home/>},
  { id: 2, route: "project",element:<Project/> },
  { id: 3, route: "contact",element:<Contact/> },
  { id: 4, route: "resume", action: downloadResume },
];


