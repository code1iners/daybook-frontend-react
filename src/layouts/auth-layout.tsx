import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <section className="flex flex-col justify-center w-[400px] mx-auto gap-3">
      {children}
    </section>
  );
}
