import MainHeader from "@/layouts/main-header";
import MainBody from "@/layouts/main-body";
import { clazz } from "@ce1pers/use-class";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={clazz("min-h-screen flex flex-col justify-between")}>
      <MainHeader />
      <MainBody className="h-main">{children}</MainBody>
    </div>
  );
}
