export default function Footer(){
  return (
    <footer className="border-t dark:border-gray-800 py-6 mt-12 bg-white dark:bg-[#071025]">
      <div className="container text-center">
        <p className="text-sm">© {new Date().getFullYear()} Kondu Vinay — Built with Next.js + Tailwind v4</p>
      </div>
    </footer>
  )
}
