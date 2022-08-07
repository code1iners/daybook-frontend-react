import { useLocation } from "react-router-dom";
import { AxiosError } from "axios";
import MainLayout from "@/layouts/main-layout";
import { useDiaryRetrieve } from "@/features/diaries/hooks/useDiary";
import { queryStringToDate } from "@/shared/utils/date.utils";

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
