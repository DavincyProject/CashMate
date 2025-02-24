"use client";

import { Calendar, Goal, Home, PiggyBank, DiamondPlus } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

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
  { title: "Dashboard", url: "/Dashboard", icon: Home },
  { title: "Savings", url: "/Savings", icon: PiggyBank },
  { title: "Goals", url: "/Goals", icon: Goal },
  { title: "Monthly Recap", url: "/Recap", icon: Calendar },
  { title: "Add Transactions", url: "/Transactions", icon: DiamondPlus },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    if (pathname) {
      setActivePath(pathname);
    }
  }, [pathname]);

  // **Tambahkan kondisi agar tidak merender sebelum mendapatkan pathname**
  if (!activePath) return null;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-xl text-black mb-5">
            CashMate
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                        activePath === item.url
                          ? "bg-[#1F2937] text-white hover:bg-[#111827] hover:text-white"
                          : "text-black"
                      }`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
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
