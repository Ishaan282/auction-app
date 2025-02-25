import { Calendar, Home, Inbox, MoreHorizontal, Plus, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Purchases",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Your Items",
    url: "#",
    icon: Search,
  },
  {
    title: "Biddings",
    url: "#",
    icon:Calendar,
  },
  {
    title: "Auctions",
    url: "#",
    icon: Settings,
  },
];

const projects = [
  {
    title: "Speakers",
    url: "#",
    icon: Settings,
  },
  {
    title: "HeadPhones",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar style={{ backgroundColor: "#1a1c1e" , color:"#f7f4f4"}} collapsible="none">
      <SidebarContent>
        {/* Logo */}
        <div className="logo" style={{ padding: "16px", textAlign: "center" }}>
          <h1>Logo</h1>
          {/* <img src="/path/to/logo.png" alt="Logo" style={{ maxWidth: "100%" }} /> */}
        </div>

        {/* Quick Actions */}
        <SidebarGroup>
          <SidebarGroupLabel style={{ color: "lightgray" }}>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Projects */}
        <SidebarGroup>
          <SidebarGroupLabel style={{ color: "lightgray" }}>Auctions</SidebarGroupLabel>
          <SidebarGroupAction title="Add Auction">
            <Plus style={{ color: "lightgray" }} / > <span className="sr-only">Add Auction</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.title}>
                  <SidebarMenuButton asChild>
                    <a href={project.url}>
                      <project.icon />
                      <span>{project.title}</span>
                    </a>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild style={{ color: "lightgray" }}>
                      <SidebarMenuAction>
                        <MoreHorizontal />
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="right"
                      align="start"
                      style={{
                        backgroundColor: "#1a1c1e",
                        color: "#f7f4f4",
                        padding:"0.5rem",
                        cursor: "pointer",
                        linegap: "0.5rem",
                        borderRadius: "0.375rem",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <DropdownMenuItem>
                        <span>Edit Auction</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Delete Auction</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}