"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center container">
      <div>
        <motion.h1 initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="text-4xl font-extrabold">
          Hi, I’m Kondu — I build data-rich products & delightful UIs.
        </motion.h1>
        <p className="mt-4 text-lg max-w-xl text-muted">I design and implement full-stack apps with clean UX. I love data, React, and Python. Available for hire — see projects & contact below.</p>
        <div className="mt-6 flex gap-3">
          <a href="#projects" className="bg-primary px-4 py-2 rounded text-white">See Projects</a>
          <a href="/blog" className="px-4 py-2 rounded border">Blog</a>
        </div>
      </div>

      <div className="mx-auto w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
        <Image src="/images/profile.png" alt="profile" width={256} height={256} style={{ objectFit: 'cover' }} />
      </div>
    </section>
  )
}
