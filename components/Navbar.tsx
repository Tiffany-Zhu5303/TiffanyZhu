"use client";
import Link from 'next/link';
import { useState, useEffect, use } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-15 ${isScrolled ? 'bg-linen/25 backdrop-blur' : 'bg-transparent'} transition-all duration-700`}>
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
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