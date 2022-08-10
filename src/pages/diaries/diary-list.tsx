import { useEffect, useState } from "react";
import MainLayout from "@/layouts/main-layout";
import { DiaryData } from "@/api/diaries/types";
import DiaryItem from "@/features/diaries/components/diary-calendar-item";
import { useDiaryList } from "@/features/diaries/hooks/useDiary";
import DiaryListHeader from "@/features/diaries/components/diary-list-header";
import SimpleLoadingText from "@/shared/components/simple-loading-text";
import SimpleErrorText from "@/shared/components/simple-error-text";

export default function DiaryList() {
  const now = new Date();
  const [year, setYear] = useState<number>(now.getFullYear());
  const [month, setMonth] = useState<number>(now.getMonth() + 1);
  const [diaries, setDiaries] = useState<DiaryData[]>([]);
  const { data, isLoading, isError } = useDiaryList({ year, month });

  useEffect(() => {
    if (data?.data) setDiaries(data.data.diaries);
  }, [year, month, data]);

  const onLeftClick = () => setMonth((curr) => curr - 1);
  const onRightClick = () => setMonth((curr) => curr + 1);

  if (isLoading) return <SimpleLoadingText />;
  else if (isError) return <SimpleErrorText />;
  return (
    <MainLayout>
      <article className="p-10 space-y-5">
        <DiaryListHeader
          year={year}
          month={month}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        />

        <section className="pb-10">
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-7;">
            {diaries.map((diary, i) => (
              <DiaryItem
                year={year}
                month={month}
                day={diary.day}
                count={diary.count}
                key={i}
              />
            ))}
          </ul>
        </section>
      </article>
    </MainLayout>
  );
}
