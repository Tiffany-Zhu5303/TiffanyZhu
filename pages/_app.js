import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell min-h-screen overflow-x-hidden">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}