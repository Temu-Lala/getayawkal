"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PDFViewerProps {
  pdfUrl: string
  title: string
  issuer: string
  date: string
  onClose: () => void
}

export function PDFViewer({ pdfUrl, title, issuer, date, onClose }: PDFViewerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Prevent scrolling of the body when modal is open
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-[90vh] bg-background rounded-lg shadow-lg flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">
              {issuer} • {date}
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-4 top-4">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            className="w-full h-full"
            title={title}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
