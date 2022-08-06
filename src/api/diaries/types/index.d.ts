import { DiaryItemProps } from "@/features/diaries/types";

export interface RetrieveDiaryByDateInput extends DiaryItemProps {}
export type RetrieveDiaryByQueryStringInput = string;

export interface DiaryData {
  count: number;
  day: number;
}

export interface GetDiariesOutput extends CoreOutput {
  data: {
    year: number;
    month: number;
    diaries: DiaryData[];
  };
}
