import React from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function ButtonDemo() {
  return (
    <div className="flex flex-col items-start space-y-4 p-4">
      <Button variant="default">Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      
      {/* Size variants */}
      <div className="flex items-center space-x-2">
        <Button size="lg">Large</Button>
        <Button size="default">Default</Button>
        <Button size="sm">Small</Button>
        <Button size="icon">
          <Loader2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Disabled state */}
      <Button disabled>Disabled Button</Button>

      {/* With icon */}
      <Button>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading
      </Button>

      {/* As child */}
      <Button asChild>
        <a href="https://ui.shadcn.com/docs/components/button">Button Docs</a>
      </Button>
    </div>
  )
}