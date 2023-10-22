import React from "react";
import NavBar from "./NavBar";
import Link from "next/link";
import NavigationLinks from "./NavigationLinks";

type Props = {
    children: React.ReactNode;
};

const Drawer = ({ children }: Props) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-white shadow z-50 sticky top-0 h-[88px] py-[5px]">
                    <NavBar />
                </div>

                {/* Page content here */}
                <div className="">{children}</div>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <NavigationLinks />
                </ul>
            </div>
        </div>
    );
};

export default Drawer;
