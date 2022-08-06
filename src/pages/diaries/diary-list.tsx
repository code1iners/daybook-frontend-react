import { useHello } from "@/api/hello";
import DiaryItem from "@/features/diaries/components/diary-item";
import { useDiaryList } from "@/features/diaries/hooks/useDiary";
import MainLayout from "@/layouts/main-layout";
import { useEffect } from "react";

const data = {
  year: 2022,
  month: 8,
  diaries: [...Array(31).keys()],
};

export default function DiaryList() {
  // const { data: d } = useHello();
  const { data: d } = useDiaryList();
  console.log(d);
  // const { data: d } = useDiaryList();
  // console.log(d);
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  return (
    <MainLayout>
      <article className="p-10">
        <h1 className="text-2xl font-semibold tracking-widest">
          {year}년 {month}월
        </h1>
        <ul className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-7">
          {data.diaries.map((day, i) => (
            <DiaryItem year={year} month={month} day={day} key={i} />
          ))}
        </ul>
      </article>
    </MainLayout>
  );
}
