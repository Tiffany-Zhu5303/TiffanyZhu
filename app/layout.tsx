import './globals.css';
import Navbar from '../components/Navbar';
import { Quicksand } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Tiffany Zhu',
  description: "Tiffany Zhu's personal web app",
  icons: {
    icon: '/icons/logo/Logo_background.svg',
  }
};

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={quicksand.className}>
      <body className="bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell min-h-screen overflow-x-hidden">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}