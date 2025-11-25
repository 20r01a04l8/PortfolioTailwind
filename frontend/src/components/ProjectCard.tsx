'use client'   

import Image from "next/image"
import { motion } from "framer-motion"

export default function ProjectCard({ title, description, img = '/images/project1.png', tech = [] }: any){
  return (
    <motion.article whileHover={{ y: -6 }} className="border rounded-lg p-4 bg-white dark:bg-[#071025]">
      <div className="relative h-40 w-full mb-3 rounded overflow-hidden">
        <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t: string) => <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">{t}</span>)}
      </div>
      <div className="mt-4">
        <a className="text-primary underline" href="#">View project</a>
      </div>
    </motion.article>
  )
}
