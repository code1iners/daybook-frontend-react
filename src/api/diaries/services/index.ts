import { axiosClient } from "@/api/core/axios";
import {
  CreateDiaryInput,
  CreateDiaryOutput,
  GetDiariesInput,
  GetDiariesOutput,
  GetDiaryInput,
  GetDiaryOutput,
  RetrieveDiaryByDateInput,
  RetrieveDiaryByQueryStringInput,
  RetrieveDiaryOutput,
  DeleteDiaryInput,
  DeleteDiaryOutput,
  EditDiaryInput,
  EditDiaryOutput,
} from "@/api/diaries/types";
import { dateToQueryString } from "@/shared/utils/date.utils";
import { DiaryRoutes } from "@/shared/constants/routes";

/**
 * [GET /api/v1/diaries] Getting all diary list.
 */
export const getDiaries = async (input: GetDiariesInput) =>
  axiosClient
    .get<GetDiariesOutput>(DiaryRoutes.Diaries, {
      params: { ...input },
    })
    .then(({ data }) => data);

/**
 * [GET /api/v1/diaries/:diaryId] Getting specific diary item.
 */
export const getDiary = async ({ diaryId }: GetDiaryInput) =>
  axiosClient
    .get<GetDiaryOutput>(`${DiaryRoutes.Diaries}/${diaryId}`)
    .then(({ data }) => data);

/**
 * [GET /api/v1/diaries/retrieve?q]
 */
export const retrieveDiaryByDate = async ({
  year,
  month,
  day,
}: RetrieveDiaryByDateInput) =>
  axiosClient
    .get(`${DiaryRoutes.Retrieve}?${dateToQueryString({ year, month, day })}`)
    .then(({ data }) => data);

/**
 * [GET /api/v1/diaries/retrieve?q]
 */
export const retrieveDiaryByQueryString = async (
  queryString: RetrieveDiaryByQueryStringInput
) =>
  axiosClient
    .get<RetrieveDiaryOutput>(`${DiaryRoutes.Retrieve}${queryString}`)
    .then(({ data }) => data);

/**
 * [POST /api/v1/diaries]
 */
export const createDiary = async (input: CreateDiaryInput) =>
  axiosClient
    .post<CreateDiaryOutput>(DiaryRoutes.Diaries, input)
    .then(({ data }) => data);

/**
 * [DELETE /api/v1/diaries/diaryId]
 */
export const deleteDiary = async ({ diaryId }: DeleteDiaryInput) =>
  axiosClient
    .delete<DeleteDiaryOutput>(`${DiaryRoutes.Diaries}/${diaryId}`)
    .then(({ data }) => data);

/**
 * [PATCH /api/v1/diaries/diaryId]
 */
export const editDiary = async ({ diaryId, content }: EditDiaryInput) =>
  axiosClient
    .patch<EditDiaryOutput>(`${DiaryRoutes.Diaries}/${diaryId}`, { content })
    .then(({ data }) => data);
