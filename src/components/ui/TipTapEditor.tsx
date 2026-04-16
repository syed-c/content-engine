'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import { useEffect, useState } from 'react'

interface TipTapEditorProps {
  content: string
  onChange?: (html: string) => void
  onSave?: (html: string) => void
  editable?: boolean
  placeholder?: string
}

export default function TipTapEditor({ 
  content, 
  onChange, 
  onSave,
  editable = true,
  placeholder = 'Start writing...'
}: TipTapEditorProps) {
  const [isSaving, setIsSaving] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 underline hover:text-blue-600'
        }
      }),
      Placeholder.configure({
        placeholder
      })
    ],
    content: content || '',
    editable,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    }
  })

  // Auto-save handler
  const handleSave = async () => {
    if (!editor || !onSave) return
    
    setIsSaving(true)
    try {
      await onSave(editor.getHTML())
    } finally {
      setIsSaving(false)
    }
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault()
        handleSave()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [editor])

  if (!editor) {
    return <div className="animate-pulse h-96 bg-surface-container-low rounded-xl"></div>
  }

  return (
    <div className="border border-outline-variant/20 rounded-xl overflow-hidden bg-surface-container-lowest">
      {/* Toolbar */}
      {editable && (
        <div className="sticky top-0 z-10 bg-surface-container-low/80 backdrop-blur-md py-2 px-4 flex gap-2 border-b border-outline-variant/10 flex-wrap">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded-lg flex items-center justify-center min-w-[36px] transition-colors ${
              editor.isActive('bold') ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-high'
            }`}
            title="Bold"
          >
            <span className="material-symbols-outlined text-lg">format_bold</span>
          </button>
          
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded-lg flex items-center justify-center min-w-[36px] transition-colors ${
              editor.isActive('italic') ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-high'
            }`}
            title="Italic"
          >
            <span className="material-symbols-outlined text-lg">format_italic</span>
          </button>
          
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-2 rounded-lg flex items-center justify-center min-w-[36px] transition-colors ${
              editor.isActive('heading', { level: 2 }) ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-high'
            }`}
            title="Heading 2"
          >
            <span className="material-symbols-outlined text-lg">title</span>
          </button>
          
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`p-2 rounded-lg flex items-center justify-center min-w-[36px] transition-colors ${
              editor.isActive('heading', { level: 3 }) ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-high'
            }`}
            title="Heading 3"
          >
            <span className="material-symbols-outlined text-lg" style={{ fontSize: '16px' }}>title</span>
          </button>
          
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded-lg flex items-center justify-center min-w-[36px] transition-colors ${
              editor.isActive('bulletList') ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-high'
            }`}
            title="Bullet List"
          >
            <span className="material-symbols-outlined text-lg">format_list_bulleted</span>
          </button>
          
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded-lg flex items-center justify-center min-w-[36px] transition-colors ${
              editor.isActive('orderedList') ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-high'
            }`}
            title="Numbered List"
          >
            <span className="material-symbols-outlined text-lg">format_list_numbered</span>
          </button>
          
          <div className="w-px h-8 bg-outline-variant/30 mx-1"></div>
          
          <button
            onClick={() => {
              const url = window.prompt('Enter URL:')
              if (url) {
                editor.chain().focus().setLink({ href: url }).run()
              }
            }}
            className={`p-2 rounded-lg flex items-center justify-center min-w-[36px] transition-colors ${
              editor.isActive('link') ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-high'
            }`}
            title="Add Link"
          >
            <span className="material-symbols-outlined text-lg">link</span>
          </button>
          
          <div className="flex-1"></div>
          
          {onSave && (
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 bg-primary text-on-primary rounded-lg font-bold text-sm flex items-center gap-2 active:scale-95 transition-transform disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <span className="material-symbols-outlined text-lg animate-spin">sync</span>
                  Saving...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">save</span>
                  Save
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Editor Content */}
      <div className="p-6 min-h-[400px] prose prose-sm max-w-none">
        <EditorContent editor={editor} className="focus:outline-none" />
      </div>
    </div>
  )
}

// CSS for TipTap placeholder
const tiptapStyles = `
.ProseMirror {
  outline: none;
  min-height: 300px;
}

.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #a8a29e;
  pointer-events: none;
  height: 0;
}

.ProseMirror h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.ProseMirror h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}

.ProseMirror ul, .ProseMirror ol {
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.ProseMirror li {
  margin: 0.5rem 0;
}

.ProseMirror p {
  margin: 0.75rem 0;
  line-height: 1.7;
}

.ProseMirror a {
  color: #3b82f6;
  text-decoration: underline;
}
`
