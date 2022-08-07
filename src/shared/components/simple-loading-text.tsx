import MainLayout from "@/layouts/main-layout";

export default function SimpleLoadingText() {
  return (
    <MainLayout>
      <article className="flex justify-center items-center">
        <span>Loading</span>
      </article>
    </MainLayout>
  );
}
