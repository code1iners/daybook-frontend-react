import { CoreOutput } from "@/api/core/types/core-output";
import { DiaryItemProps } from "@/features/diaries/types";

export interface RetrieveDiaryByDateInput extends DiaryItemProps {}
export type RetrieveDiaryByQueryStringInput = string;

export interface DiaryData {
  count: number;
  day: number;
}

export interface SimpleDate {
  year: number;
  month: number;
  day: number;
}

export interface GetDiariesInput {
  year: number;
  month: number;
}

export interface GetDiariesOutput extends CoreOutput {
  data: {
    year: number;
    month: number;
    diaries: DiaryData[];
  };
}

export interface CreateDiaryInput extends SimpleDate {
  content: string;
}

export interface CreateDiaryOutput extends CoreOutput {}

export interface DeleteDiaryInput {
  diaryId: number;
}

export interface DeleteDiaryOutput extends CoreOutput {}

export interface EditDiaryInput {
  diaryId: number;
  content: string;
}

export interface EditDiaryOutput extends CoreOutput {}
