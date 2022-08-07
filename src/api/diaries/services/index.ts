import { axiosClient } from "@/api/core/axios";
import {
  GetDiariesOutput,
  RetrieveDiaryByDateInput,
  RetrieveDiaryByQueryStringInput,
} from "@/api/diaries/types";
import { dateToQueryString } from "@/shared/utils/date.utils";
import { DiaryRoutes } from "@/shared/constants/routes";

/**
 * [GET /api/v1/diaries] Getting all diary list.
 */
export const getDiaries = async () => {
  return axiosClient
    .get<GetDiariesOutput>(DiaryRoutes.Diaries)
    .then(({ data }) => data);
};

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
 * [GET /diaries/retrieve?q]
 */
export const retrieveDiaryByQueryString = async (
  queryString: RetrieveDiaryByQueryStringInput
) =>
  axiosClient
    .get(`${DiaryRoutes.Retrieve}${queryString}`)
    .then(({ data }) => data);
