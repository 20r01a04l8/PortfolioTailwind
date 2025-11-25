import ProjectCard from './ProjectCard'

const sample = [
  { title: 'Pizza Sales Dashboard', description: 'ETL + Viz for pizza sales', img: '/images/project1.png', tech: ['Python','Tableau'] },
  { title: 'Chess Analytics', description: 'End-to-end analytics', img: '/images/project2.png', tech: ['React','Python'] }
]

export default function Projects(){
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {sample.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
