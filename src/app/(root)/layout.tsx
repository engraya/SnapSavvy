import Sidebar from "@src/components/shared/SideBar";
import MobileNav from "@src/components/shared/MobileNav";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="root">
      <Sidebar />
      <div className="root-container">
        <div className="wrapper">
          <MobileNav />
          {children}
        </div>
      </div>
      <Toaster />
    </main>
  );
}
