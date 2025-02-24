"use client";

import { Calendar, Goal, Home, PiggyBank, DiamondPlus } from "lucide-react";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Savings",
    url: "#",
    icon: PiggyBank,
  },
  {
    title: "Goals",
    url: "#",
    icon: Goal,
  },
  {
    title: "Monthly Recap",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Add Transactions",
    url: "#",
    icon: DiamondPlus,
  },
];

export function AppSidebar() {
  const [active, setActive] = useState(items[0].title);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-xl text-black">
            CashMate
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      onClick={() => setActive(item.title)}
                      className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                        active === item.title
                          ? "bg-blue-400 text-white"
                          : "text-black"
                      }`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
