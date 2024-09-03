/* eslint-disable react/prop-types */
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useState } from "react";
import BrandLogo from "../assets/brand.png";
import Logo from "../assets/search 2.png";

export const SideBarContext = createContext();

export const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm ">
          <div className="p-4 pb-1 flex justify-between items-center">
            <img
              src={BrandLogo}
              alt="brand"
              className={` overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              } h-10 rounded-md`}
            />

            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SideBarContext.Provider value={{ expanded }}>
            <ul className="flex-1">{children}</ul>
          </SideBarContext.Provider>

          <div className="border-t flex p-3 space-x-2">
            <img src={Logo} className="w-10 h-10 rounded-md" />
            <div
              className={` overflow-hidden  flex justify-between transition-all items-center ${
                expanded ? "w-53 ml-3" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Ashis Kumer Paul</h4>
                <span className="text-xs text-gray-600">
                  ashiskumer245@gmail.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};
