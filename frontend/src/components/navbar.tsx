'use client'
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { signIn, signOut } from "next-auth/react"


export function Navbar() {
  const pathname = usePathname()
  const { status } = useSession()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevent rendering anything until the component has mounted
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {status === "authenticated" ? (
              <Button onClick={() => signOut()}>Sign out</Button>
            ) : status === "unauthenticated" ? (
            <Button onClick={() => signIn("google")}>Sign in</Button>
          ) : null}
        </div>
      </div>
    </header>
  )
}


