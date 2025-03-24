'use client'

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { Link, LogOut } from 'lucide-react'

import { DarkModeToggle } from './dark-mode-toggle'
import { LanguageSelector } from './language-selector'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function NavUser() {
  const { state } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex flex-row gap-2">
          {state !== 'collapsed' && <LanguageSelector />}
          <DarkModeToggle />
        </div>
        <Separator className="my-2" />
        <SidebarMenuButton asChild>
          <p>
            <LogOut />
            <span>Log Out</span>
          </p>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
