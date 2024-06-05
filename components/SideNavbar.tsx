"use client";

import { useState, useEffect } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";
import classNames from "classnames";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileWidth, setMobileWidth] = useState(false);
  const onlyWidth = useWindowWidth();

  // Load the isCollapsed state from local storage on initial render
  useEffect(() => {
    const storedIsCollapsed = localStorage.getItem("isCollapsed");
    if (storedIsCollapsed !== null) {
      setIsCollapsed(JSON.parse(storedIsCollapsed));
    }
  }, []);

  // Save the isCollapsed state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("isCollapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  useEffect(() => {
    setMobileWidth(onlyWidth < 768);
  }, [onlyWidth]);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div
      className={classNames(
        "relative border-r px-3 pb-10 pt-24 sidebar-transition",
        {
          "sidebar-expand": !isCollapsed && !mobileWidth,
          "sidebar-collapse": isCollapsed || mobileWidth,
        }
      )}
    >
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            {isCollapsed ? <ChevronLeft /> : <ChevronRight />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
