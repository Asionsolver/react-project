/* eslint-disable react/prop-types */

import { useContext } from "react";

import { SideBarContext } from "./Sidebar";

export const SidebarItems = ({ icon, text, active, alert }) => {
  const { expanded } = useContext(SideBarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? " bg-gradient-to-tr from-sky-400 to-sky-100 text-sky-800"
          : "hover:bg-sky-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0 ml-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div className="absolute  right-2 h-2 w-2 bg-indigo-500 rounded-full"></div>
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 invisible ml-6 bg-indigo-100 text-indigo-800 text-sm opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
    
  );
};
