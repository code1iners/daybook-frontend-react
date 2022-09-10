import qs from "query-string";
import { DiaryItemProps } from "@/features/diaries/types";

export const convertDateAsTwoDigits = (date?: number) =>
  String(date).padStart(2, "0");

export const makeStringDate = () => {
  const dateObject = new Date();
  const year = convertDateAsTwoDigits(dateObject.getFullYear());
  const month = convertDateAsTwoDigits(dateObject.getMonth() + 1);
  const date = dateObject.getDate();
  const combined = `${year}-${month}-${date}`;

  return {
    year,
    month,
    date,
    combined,
    combinedObject: new Date(combined),
    dateObject,
  };
};

export const makeFirstDayDate = () => {
  const { year, month } = makeStringDate();
  const combined = `${year}-${month}-01`;
  return {
    year,
    month,
    date: "01",
    combined,
    combinedObject: new Date(combined),
  };
};

/**
 * Make full calendar.
 */
export const makeFullCalendar = (data: any) => {
  if (!data) return;
  const results = [];
  const FULL_DATE_COUNT = 35;
  console.log(data);

  const { combinedObject } = makeFirstDayDate();
  const week = combinedObject.getDay();

  console.log(week);
};

export const dateToQueryString = ({ year, month, day }: DiaryItemProps) =>
  qs.stringify({
    year,
    month: convertDateAsTwoDigits(month),
    day: convertDateAsTwoDigits(day),
  });

export const queryStringToDate = <T>(
  queryString: string
): T | qs.ParsedQuery<string> => qs.parse(queryString);
