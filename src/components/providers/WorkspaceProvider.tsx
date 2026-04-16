'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useSupabase } from './SupabaseProvider'

interface Workspace {
  id: string
  name: string
  plan: string
  owner_id: string
}

interface WorkspaceContextType {
  workspace: Workspace | null
  workspaces: Workspace[]
  loading: boolean
  setWorkspace: (ws: Workspace) => void
  refreshWorkspaces: () => Promise<void>
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined)

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const { supabase, user } = useSupabase()
  const [workspace, setWorkspace] = useState<Workspace | null>(null)
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [loading, setLoading] = useState(true)

  const refreshWorkspaces = async () => {
    if (!user) return
    
    const { data, error } = await supabase
      .from('workspaces')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) {
      setWorkspaces(data)
      if (data.length > 0 && !workspace) {
        setWorkspace(data[0])
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      refreshWorkspaces()
    } else if (!user && !loading) {
      setWorkspaces([])
      setWorkspace(null)
    }
  }, [user])

  return (
    <WorkspaceContext.Provider value={{ workspace, workspaces, loading, setWorkspace, refreshWorkspaces }}>
      {children}
    </WorkspaceContext.Provider>
  )
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext)
  if (context === undefined) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider')
  }
  return context
}