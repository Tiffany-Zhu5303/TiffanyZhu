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
    <nav className={`w-full fixed top-0 z-50 ${isScrolled ? 'bg-linen/25 backdrop-blur' : 'bg-transparent'} transition-all duration-700`}>
      <div className="w-full mx-auto p-4 md:p-6 lg:p-8 h-16 flex items-center justify-between text-md lg:text-xl">
        <div className="font-bold">
            <Link href="/"><img src="/icons/logo/Logo_transparent.png" alt="Logo" className='h-12 w-12'/></Link>
        </div>
        <div className="space-x-4 md:space-x-6 lg:space-x-12">
            <Link href="/projects" className="hover:text-lavender-floral">Projects</Link>
            <Link href="/experiences" className="hover:text-lavender-floral">Experiences</Link>
            <Link href="/about" className="hover:text-lavender-floral">About</Link>
        </div>
      </div>
    </nav>
  );
}