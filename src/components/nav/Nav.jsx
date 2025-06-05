import { motion } from "framer-motion";
import { useState } from "react";
import { tabs } from "@/components/common/data";
import GooeyNav from "@/components/magicui/nav-gooey";

const Nav = ({ className }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    if (tab.action) tab.action();
  };

  return (
<div style={{ height: '600px', position: 'relative' }}>
  <GooeyNav
    items={tabs}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>
    // <nav
    //   className={`
    //     ${className} 
    //     flex items-center space-x-3 
    //     lg:text-xl text-sm text-white bg-black/30 font-roboto font-light backdrop-blur-sm
    //   `}
    // >
    //   <div className="mr-auto size-10 border p-0.5">logo</div>
    //   {tabs.map((tab) => (
    //     <button
    //       key={tab.id}
    //       onClick={() => handleTabClick(tab)}
    //       className={`
    //         relative rounded px-3 py-1.5 flex items-center transition 
    //         ${tab.id === 4 ? "!bg-slate-900" : ""}
    //       `}
    //       style={{ WebkitTapHighlightColor: "transparent" }}
    //     >
    //       {activeTab === tab.id && (
    //         <motion.span
    //           layoutId="bubble"
    //           className="absolute inset-0 z-10 mix-blend-difference pl-0.5 flex items-center"
    //           transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
    //         />
    //       )}
    //       <span className="z-20 uppercase pb-0.5">{tab.route}</span>
    //     </button>
    //   ))}
    // </nav>
  );
};

export default Nav;
