'use client';
import React, { useState } from 'react';
import NavLinks from '@/app/ui/components/nav-links';
import { MenuIcon } from 'lucide-react';

export default function SideNav() {
  const [showNavBar, setShowNavBar] = useState<boolean>(false)

  return (
    <main className='w-14 md:w-64 h-screen relative'>
      <section className='bg-gray-400 p-4 h-full md:hidden'>
        <button>
          <MenuIcon onClick={() => { setShowNavBar(true) }} />
        </button>
      </section>
      <section className={`${showNavBar ? "translate-x-0" : "-translate-x-full"} transition-transform h-screen w-[50vw] absolute top-0 bg-gray-50`}>
        <NavLinks handleClose={() => { setShowNavBar(false) }} />
      </section>
      <div className="flex h-full w-[100%] flex-col px-3 py-4 md:px-2 bg-gray-200">
        <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks handleClose={() => { setShowNavBar(false) }} />
        </div>
      </div>
    </main>
  );
}