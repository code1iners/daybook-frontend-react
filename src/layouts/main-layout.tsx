import MainHeader from "@/layouts/main-header";
import MainBody from "@/layouts/main-body";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <MainHeader />
      <MainBody className="h-main">{children}</MainBody>
    </div>
  );
}
