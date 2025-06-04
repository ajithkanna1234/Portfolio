import {downloadResume} from "@/components/common/downloadResume";
import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "profile", label: "profile" },
  { id: "project", label: "project" },
  { id: "contact", label: "contact" },
  { id: "resume", label: "resume", action: downloadResume },
];

const Nav = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-3 lg:text-xl text-white text-sm font-roboto font-light sticky top-4">
      <div className="mr-auto size-10 border p-0.5 bg-background">logo</div>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            if (tab.action) tab.action();
          }}
          className={`${
            tab.id === "resume" ? "!bg-slate-900" : "bg-background"
          } relative rounded px-3 py-1.5 flex items-center transition`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 mix-blend-difference pl-0.5 flex items-center"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="z-20 uppercase pb-0.5">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Nav;
