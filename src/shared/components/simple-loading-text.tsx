import MainLayout from "@/layouts/main-layout";
import { SimpleLoadingTextProps } from "@/shared/types";

export default function SimpleLoadingText({ text }: SimpleLoadingTextProps) {
  return (
    <MainLayout>
      <article className="flex justify-center items-center">
        <span>{text ? text : "Loading.."}</span>
      </article>
    </MainLayout>
  );
}
