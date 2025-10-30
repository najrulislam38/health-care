"use client";

import * as React from "react";
import {
  IconDashboard,
  IconHelp,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import checkAuth from "@/utils/auth";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
const baseNavMenuItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: IconDashboard,
  },
  // {
  //   title: "Lifecycle",
  //   url: "#",
  //   icon: IconListDetails,
  // },
  // {
  //   title: "Analytics",
  //   url: "#",
  //   icon: IconChartBar,
  // },
  // {
  //   title: "Projects",
  //   url: "#",
  //   icon: IconFolder,
  // },
  // {
  //   title: "Add Doctor",
  //   url: "/dashboard/add-doctor",
  //   icon: IconUsers,
  // },
];

const navSecondary = [
  {
    title: "Settings",
    url: "#",
    icon: IconSettings,
  },
  {
    title: "Get Help",
    url: "#",
    icon: IconHelp,
  },
  {
    title: "Search",
    url: "#",
    icon: IconSearch,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = React.useState<any | null>(null);

  React.useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const res = await checkAuth();
        if (!mounted) return;
        if (res?.isAuthenticated) {
          setUser(res.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        if (mounted) setUser(null);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const role = user?.role ?? "GUEST";

  const navMain = React.useMemo(() => {
    const items = [...baseNavMenuItems];
    if (role === "ADMIN") {
      items.push(
        {
          title: "Manage Doctors",
          url: "/dashboard/manage-doctors",
          icon: IconSettings,
        },
        {
          title: "Manage Patients",
          url: "/dashboard/manage-patients",
          icon: IconUsers,
        }
      );
    }
    return items;
  }, [role]);

  const userData = {
    name: user?.name ?? "Guest",
    email: user?.email ?? "",
    avatar: user?.imageUrl ?? "",
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link href="/">
                <HomeIcon size={32} className="text-primary" />
                <span className="text-base font-semibold">Health Care</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
}
