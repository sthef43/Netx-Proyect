import SideNav from "@/app/ui/components/sidenav";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex w-full h-screen">
            <SideNav />
            <div className="w-full p-3">
                {children}
            </div>
        </div>
    )
}