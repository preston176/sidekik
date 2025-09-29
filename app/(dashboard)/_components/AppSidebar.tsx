"use client"

import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { Moon, PlusCircleIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function AppSidebar() {
    const { theme, setTheme } = useTheme()
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="p-3">
                    <div className="flex justify-between items-center">
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
                        <div>
                            <Button
                                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                                onClick={() =>
                                    setTheme((current) => (current === "dark" ? "light" : "dark"))
                                }
                                variant={"ghost"}
                            >
                                {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
                            </Button>
                        </div>
                    </div>
                    <Button className="w-full mt-7" aria-label="Add New Chat">
                        <span>
                            <PlusCircleIcon aria-hidden="true" />
                        </span>
                        Add New Chat
                    </Button>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}