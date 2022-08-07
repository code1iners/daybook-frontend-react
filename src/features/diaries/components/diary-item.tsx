import { useNavigate } from "react-router-dom";
import { DiaryRoutes } from "@/shared/constants/routes";
import { DiaryItemProps } from "@/features/diaries/types";
import { dateToQueryString } from "@/shared/utils/date.utils";

export default function DiaryItem({ year, month, day, count }: DiaryItemProps) {
  const navigation = useNavigate();

  const onDiaryClick = () => {
    const q = dateToQueryString({ year, month, day });
    navigation(`${DiaryRoutes.Retrieve}?${q}`);
  };

  return (
    <li
      className="border rounded-md h-44 cursor-pointer flex flex-col transition-transform hover:scale-105"
      key={day}
      onClick={onDiaryClick}
    >
      <div className="border-b px-2 py-1">{day}</div>
      <div className="grow flex justify-center items-center flex-wrap">
        <p className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>x</span>
          <span>{count}</span>
        </p>
      </div>
    </li>
  );
}
