import React, { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './(dashboard)/_components/AppSidebar'
import AppHeader from './(dashboard)/_components/AppHeader'



function Provider({ children, ...props }: {
    children: ReactNode
}) {


    return (
        <ThemeProvider {...props}
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <AppSidebar />


                <SidebarInset className='w-full'>
                    <AppHeader />
                    <div>{children}</div>
                </SidebarInset>
            </SidebarProvider>

        </ThemeProvider>
    )
}

export default Provider
