import { clazz } from "@ce1pers/use-class";

interface MainBodyProps {
  children: React.ReactNode;
  className?: string;
}

export default function MainBody({ children, className }: MainBodyProps) {
  return <main className={clazz(className ? className : "")}>{children}</main>;
}
