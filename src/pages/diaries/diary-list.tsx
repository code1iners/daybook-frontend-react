import { useEffect, useState } from "react";
import MainLayout from "@/layouts/main-layout";
import { DiaryData } from "@/api/diaries/types";
import DiaryItem from "@/features/diaries/components/diary-item";
import { useDiaryList } from "@/features/diaries/hooks/useDiary";
import DiaryListHeader from "@/features/diaries/components/diary-list-header";

export default function DiaryList() {
  // Need previous, next month data api.
  const { data, isLoading, isError } = useDiaryList();
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [diaries, setDiaries] = useState<DiaryData[]>([]);

  useEffect(() => {
    if (data?.data) {
      const { year, month, diaries } = data?.data;
      setYear(year);
      setMonth(month);
      setDiaries(diaries);
    }
  }, [data]);

  if (isLoading) return <p>Loading</p>;
  else if (isError) return <p>Error</p>;

  return (
    <MainLayout>
      <article className="p-10">
        <DiaryListHeader year={year} month={month} />

        <section>
          <ul className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-7">
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
