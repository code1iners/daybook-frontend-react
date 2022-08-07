import { useDiaryRetrieve } from "@/features/diaries/hooks/useDiary";
import MainLayout from "@/layouts/main-layout";
import { queryStringToDate } from "@/utils/date.utils";
import { AxiosError } from "axios";
import { useLocation } from "react-router-dom";

export default function DiaryRetrieve() {
  const { search } = useLocation();

  const { data, error, isError, isLoading } = useDiaryRetrieve(search);
  const e = error as AxiosError;
  return (
    <MainLayout>
      <article className="flex flex-col justify-center items-center">
        <div>input : {JSON.stringify(queryStringToDate(search))}</div>
        <div>output : {isLoading ? "loading" : isError ? e.message : data}</div>
      </article>
    </MainLayout>
  );
}
