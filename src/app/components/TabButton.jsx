import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
  ? "text-green-500 px-2"
  : "text-[#ADB7BE] hover:text-green-200";
  return (
    <button
  onClick={selectTab}
  className={`block w-full rounded-full text-lg font-bold mb-4 ${buttonClasses}`}
>
  <span className="block border-[#2563eb] mt-2 w-full border-4 bg-[#121212] hover:bg-slate-800 rounded-full py-2 text-center">
    {children}
  </span>
  <motion.div
    animate={active ? "active" : "default"}
    variants={variants}
    className="h-1 bg-primary-500 mt-2"
  ></motion.div>
</button>

  );
};

export default TabButton;