export default function Skills(){
  const categories = [
    { name: 'Frontend', skills: ['React','Next.js','Tailwind'] },
    { name: 'Backend', skills: ['Python','FastAPI','Postgres'] }
  ]
  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold">Skills</h3>
      <div className="mt-3 grid sm:grid-cols-2 gap-4">
        {categories.map(c => (
          <div key={c.name} className="p-3 border rounded">
            <h4 className="font-medium">{c.name}</h4>
            <div className="mt-2 flex gap-2 flex-wrap">
              {c.skills.map(s => <span key={s} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
