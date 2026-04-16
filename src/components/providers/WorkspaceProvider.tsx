'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

interface Workspace {
  id: string
  name: string
  plan: string
  owner_id: string
}

interface WorkspaceContextType {
  supabase: SupabaseClient
  workspace: Workspace | null
  workspaces: Workspace[]
  user: any
  loading: boolean
  setWorkspace: (ws: Workspace) => void
  refreshWorkspaces: () => Promise<void>
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined)

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const [workspace, setWorkspace] = useState<Workspace | null>(null)
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial user
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

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
    }
  }, [user])

  return (
    <WorkspaceContext.Provider value={{ 
      supabase, 
      workspace, 
      workspaces, 
      user,
      loading, 
      setWorkspace, 
      refreshWorkspaces 
    }}>
      {children}
    </WorkspaceContext.Provider>
  )
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext)
  if (!context) {
    throw new Error('useWorkspace must be used within WorkspaceProvider')
  }
  return context
}
