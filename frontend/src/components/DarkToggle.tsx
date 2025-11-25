"use client"
import { useState, useEffect } from "react"

export default function DarkToggle(){
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  }

  return <button onClick={toggle} className="p-2 rounded border">{ isDark ? '🌙' : '☀️' }</button>
}
