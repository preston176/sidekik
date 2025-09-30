import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { HelpCircle } from 'lucide-react'
import React from 'react'

function AppHeader() {
    return (
        <div className='p-3 shadow flex justify-between items-center'>
            <SidebarTrigger />
            <Button><HelpCircle />Take Tour</Button>
        </div>
    )
}

export default AppHeader
