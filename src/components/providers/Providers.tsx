'use client'

import { ReactNode } from 'react'
import { SupabaseProvider } from './SupabaseProvider'
import { WorkspaceProvider } from './WorkspaceProvider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SupabaseProvider>
      <WorkspaceProvider>
        {children}
      </WorkspaceProvider>
    </SupabaseProvider>
  )
}