import { useLocation } from "react-router-dom";
import { AxiosError } from "axios";
import MainLayout from "@/layouts/main-layout";
import { useDiaryRetrieve } from "@/features/diaries/hooks/useDiary";
import { queryStringToDate } from "@/shared/utils/date.utils";
import DiaryRetrieveItem from "@/features/diaries/components/diary-retrieve-item";

export default function DiaryRetrieve() {
  const { search } = useLocation();

  const { data, error, isError, isLoading } = useDiaryRetrieve(search);
  return (
    <MainLayout>
      <article className="flex flex-col justify-center items-center">
        <ul className="grid grid-cols-1 w-full h-full p-10 gap-5 overflow-y-auto">
          {data?.data.map((diary) => (
            <DiaryRetrieveItem key={diary.diaryId} diary={diary} />
          ))}
        </ul>
      </article>
    </MainLayout>
  );
}
