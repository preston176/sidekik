"use client"

import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupLabel,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import {
    Moon,
    PlusCircleIcon,
    Sun,
    Home,
    Users,
    Grid,
    Trash2,
    Settings,
    Clock,
    MoreHorizontal,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

// ✅ Config for main navigation
const mainMenu = [
    { label: "Projects", icon: Home },
    { label: "Shared", icon: Users },
    { label: "Templates", icon: Grid },
    { label: "Trash", icon: Trash2 },
    { label: "Settings", icon: Settings },
]

// ✅ Recently opened items
const recentlyOpened = [
    "Introduction to Clone",
    "Operations Management",
    "Mas low's Hierarchy...",
]

export function AppSidebar() {
    const { theme, setTheme } = useTheme()

    return (
        <Sidebar className="overflow-x-clip">
            {/* HEADER */}
            <SidebarHeader>
                <div className="p-3">
                    <div className="flex justify-between items-center">
                        {/* Logo & Title */}
                        <div className="flex items-center gap-3">
                            <Image
                                src={"/logo.png"}
                                alt="Sidekik Logo"
                                width={60}
                                height={60}
                                className="w-[40px] h-[40px]"
                                priority
                            />
                            <h1 className="font-bold text-xl">
                                <span>Side</span>
                                <span className="sr-only">kik - AI Chat Dashboard</span>
                                <span>kik</span>
                            </h1>
                        </div>

                        {/* Theme Switcher */}
                        <Button
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                            onClick={() =>
                                setTheme((current) => (current === "dark" ? "light" : "dark"))
                            }
                            variant="ghost"
                        >
                            {theme === "dark" ? (
                                <Sun aria-hidden="true" />
                            ) : (
                                <Moon aria-hidden="true" />
                            )}
                        </Button>
                    </div>

                    {/* Add New Chat */}
                    <Button className="w-full mt-7" aria-label="Add New Chat">
                        <PlusCircleIcon aria-hidden="true" />
                        Add New Chat
                    </Button>
                </div>
            </SidebarHeader>

            {/* CONTENT */}
            <SidebarContent className="hide-scrollbar">
                {/* Main Menu */}
                <SidebarGroup className="p-3">
                    <SidebarMenu className="cursor-pointer">
                        {mainMenu.map(({ label, icon: Icon }) => (
                            <SidebarMenuItem key={label}>
                                <SidebarMenuButton asChild>
                                    <a className="flex items-center gap-2">
                                        <Icon />
                                        <span>{label}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>

                {/* Recently Opened */}
                <SidebarGroup className="px-3">
                    <SidebarGroupLabel>Recently Opened</SidebarGroupLabel>
                    <SidebarMenu>
                        {recentlyOpened.map((title, idx) => (
                            <SidebarMenuItem
                                key={idx}
                                className="flex items-center justify-between cursor-pointer"
                            >
                                <SidebarMenuButton asChild>
                                    <a className="flex items-center gap-2">
                                        <Clock />
                                        <span className="truncate">{title}</span>
                                    </a>
                                </SidebarMenuButton>
                                <div className="opacity-60">
                                    <MoreHorizontal />
                                </div>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>

                {/* Upgrade Box */}
                <SidebarGroup className="p-3">
                    <div className="rounded-md bg-gradient-to-b from-muted/80 to-muted/60 p-4 text-sm">
                        <h3 className="font-semibold">Get SideKik Pro</h3>
                        <p className="text-xs mt-1 text-muted-foreground">
                            More Chat History + Access to more models
                        </p>
                        <Button className="w-full mt-3" variant="default">
                            Upgrade
                        </Button>
                    </div>
                </SidebarGroup>

                <SidebarSeparator />
            </SidebarContent>

            <SidebarFooter />
        </Sidebar>
    )
}
