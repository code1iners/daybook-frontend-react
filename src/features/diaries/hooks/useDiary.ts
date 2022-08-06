import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/api/core/axios";
import { UseDiaryKeys } from "@/features/diaries/types/use-diary.keys";

export const useDiaryList = () =>
  useQuery([UseDiaryKeys.Diaries], () => axiosClient.get("/diaries"));

export const useDiaryDetail = (diaryId: number) =>
  useQuery([UseDiaryKeys.Diary], () => axiosClient.get(`/diaries/${diaryId}`));
