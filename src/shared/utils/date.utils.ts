import qs from "query-string";
import { DiaryItemProps } from "@/features/diaries/types";

export const dateToQueryString = ({ year, month, day }: DiaryItemProps) =>
  qs.stringify({
    year,
    month: String(month).padStart(2, "0"),
    day: String(day).padStart(2, "0"),
  });

export const queryStringToDate = <T>(
  queryString: string
): T | qs.ParsedQuery<string> => qs.parse(queryString);
