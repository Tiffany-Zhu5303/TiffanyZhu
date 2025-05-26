import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between fixed top-0 z-15">
        <div className="text-xl font-bold">
            <Link href="/">TZ</Link>
        </div>
        <div className="space-x-4">
            <Link href="/projects" className="hover:text-lavender-floral">Projects</Link>
            <Link href="/experiences" className="hover:text-lavender-floral">Experiences</Link>
            <Link href="/about" className="hover:text-lavender-floral">About</Link>
        </div>
      </div>
    </nav>
  );
}