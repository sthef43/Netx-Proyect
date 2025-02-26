import NavLinks from '@/app/ui/components/nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full w-[10%] flex-col px-3 py-4 md:px-2 bg-gray-200">
      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}