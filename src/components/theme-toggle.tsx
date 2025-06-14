"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", isDark ? "light" : "dark")
  }

  return (
    <div 
      className={cn(
        "tdnn cursor-pointer",
        !isDark && "day"
      )}
      onClick={toggleTheme}
    >
      <div className={cn(
        "moon",
        !isDark && "sun"
      )} />
    </div>
  )
} 