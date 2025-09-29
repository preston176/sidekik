"use client"

import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function AppSidebar() {
    const { theme, setTheme } = useTheme()
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="p-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Image src={"/logo.png"} alt="Sidekik Logo" width={60} height={60} className="w-[40px] h-[40px]" />
                        <h2 className="font-bold text-xl">Side<span>kik</span></h2>
                    </div>
                    <div>
                        <Button
                            onClick={() =>
                                setTheme((current) => (current === "dark" ? "light" : "dark"))
                            }
                            variant={"ghost"}
                        >
                            {
                                theme === "dark" ? <Sun /> : <Moon />
                            }
                        </Button>
                    </div>
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