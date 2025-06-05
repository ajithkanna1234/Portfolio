import Home from "@/components/home/Home";
import Project from "@/components/project/Project";
import Contact from "@/components/contact/Contact";
import Nav from "@/components/nav/Nav";
import { createRef } from "react";
import { downloadResume } from "./downloadResume";
import { ContactIcon, ContactRoundIcon } from "lucide-react";

export const tabs = [
  { id: 0,icon:"",element:<Nav/> , className:"fixed top-2 w-4/5 "},
  { id: 1,icon:"", route: "home" ,element:<Home/>},
  { id: 2,icon:"", route: "project",element:<Project/> },
  { id: 3,icon:<ContactRoundIcon className="bg-white text-black z-50"/>, route: "contact",element:<Contact/> },
  { id: 4,icon:"", route: "resume", action: downloadResume },
];


