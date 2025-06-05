import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Tiffany Zhu',
  description: "Tiffany Zhu's personal web app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-lavender-floral via-periwinkle to-seashell min-h-screen overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}