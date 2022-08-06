import { useQuery } from "@tanstack/react-query";
import { getDiaries, retrieveDiaryByQueryString } from "@/api/diaries/services";
import { UseDiaryKeys } from "@/features/diaries/constants";

export const useDiaryList = () =>
  useQuery([UseDiaryKeys.Diaries], () => getDiaries());

export const useDiaryRetrieve = (queryString: string) =>
  useQuery([UseDiaryKeys.Retrieve], () =>
    retrieveDiaryByQueryString(queryString)
  );
