import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Kondu · Portfolio',
  description: 'Portfolio built with Next.js + Tailwind v4'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
