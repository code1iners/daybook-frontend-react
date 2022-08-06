import { DiaryData } from "@/api/diaries/types";
import { useHello } from "@/api/hello";
import DiaryItem from "@/features/diaries/components/diary-item";
import { useDiaryList } from "@/features/diaries/hooks/useDiary";
import MainLayout from "@/layouts/main-layout";
import { useEffect, useState } from "react";

export default function DiaryList() {
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

  return (
    <MainLayout>
      <article className="p-10">
        <h1 className="text-2xl font-semibold tracking-widest">
          {year}년 {month}월
        </h1>
        {isLoading ? (
          "Loading.."
        ) : isError ? (
          "Error"
        ) : (
          <ul className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-7">
            {diaries.map((diary, i) => (
              <DiaryItem year={year} month={month} day={diary.day} key={i} />
            ))}
          </ul>
        )}
      </article>
    </MainLayout>
  );
}
