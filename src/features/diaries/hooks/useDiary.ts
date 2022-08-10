import {
  GetDiariesInput,
  GetDiaryInput,
} from "./../../../api/diaries/types/index.d";
import { useQuery } from "@tanstack/react-query";
import {
  getDiaries,
  getDiary,
  retrieveDiaryByQueryString,
} from "@/api/diaries/services";
import { UseDiaryKeys } from "@/features/diaries/constants";

export const useDiaryList = (input: GetDiariesInput) =>
  useQuery([UseDiaryKeys.Diaries, input], () => getDiaries(input));

export const useDiaryDetail = (input: GetDiaryInput) =>
  useQuery([UseDiaryKeys.Detail, input], () => getDiary(input));

export const useDiaryRetrieve = (queryString: string) =>
  useQuery([UseDiaryKeys.Retrieve], () =>
    retrieveDiaryByQueryString(queryString)
  );
