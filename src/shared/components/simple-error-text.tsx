import MainLayout from "@/layouts/main-layout";

export default function SimpleErrorText() {
  return (
    <MainLayout>
      <article className="h-full flex justify-center items-center">
        <section className="flex flex-col items-center space-y-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-3xl">Sorry..</h1>
          </div>
          <h2 className="text-xl text-center opacity-60">
            Service is unstable,
            <br />
            Please try again later.
          </h2>
        </section>
      </article>
    </MainLayout>
  );
}
