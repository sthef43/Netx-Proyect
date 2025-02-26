'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { XIcon } from 'lucide-react';

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Posts', href: '/blog/posts', icon: DocumentDuplicateIcon, },
  { name: 'About', href: '/blog/about', icon: UserGroupIcon },
  { name: 'Contact', href: '/blog/contact', icon: EnvelopeIcon },
];

interface handleCloseMenu {
  handleClose: (state: boolean) => void
}

export default function NavLinks ({ handleClose }: handleCloseMenu) {
  const pathname = usePathname();
  return (
    <>
      <main className='mt-8 md:mt-0 md:flex md:flex-col md:gap-y-4'>
        <div className='px-3 flex flex-row items-center gap-2 md:hidden' onClick={() => { handleClose(false) }}>
          <XIcon className='w-7'/>
          <p className='text-xl text-black'>Close</p>
        </div>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => { handleClose(false) }}
              className={clsx(
                `flex h-[48px] grow md:items-center gap-2 md:rounded-md bg-gray-50 p-3 hover:bg-purple-200 transition-all text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3`,
                {
                  'bg-purple-300': pathname === link.href
                }
              )}
            >
              <LinkIcon className="w-7" />
              <p className="block text-xl text-black">{link.name}</p>
            </Link>
          );
        })}
      </main>
    </>
  );
}
