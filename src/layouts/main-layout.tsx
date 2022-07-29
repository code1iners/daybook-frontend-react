import MainHeader from "@/layouts/main-header";
import MainBody from "@/layouts/main-body";

interface MainLayou {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayou) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <MainHeader />
      <MainBody className="grow">{children}</MainBody>
    </div>
  );
}
