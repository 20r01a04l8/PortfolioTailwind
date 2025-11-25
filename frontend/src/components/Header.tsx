"use client"
import Link from "next/link"
import DarkToggle from "./DarkToggle"
import { useState } from "react"

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white dark:bg-[#071025] border-b dark:border-gray-800">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-bold text-xl text-primary">Kondu</Link>
          <span className="text-sm text-gray-500 hidden sm:inline">Full-stack developer</span>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="/blog" className="px-3 py-1 rounded bg-primary text-white">Contact</Link>
          <DarkToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <DarkToggle />
          <button aria-label="menu" onClick={() => setOpen(s => !s)} className="p-2">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-[#071025] border-t">
          <div className="p-4 flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
