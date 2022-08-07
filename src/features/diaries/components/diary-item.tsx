import { useNavigate } from "react-router-dom";
import { DiaryItemProps } from "@/features/diaries/types";
import { DiaryRoutes } from "@/shared/constants/routes";
import { dateToQueryString } from "@/shared/utils/date.utils";
import DiaryItemCount from "@/features/diaries/components/diary-item-count";

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
      <div className="border-b px-2 py-1 flex justify-center">
        <h1>{day}</h1>
      </div>
      <div className="grow flex justify-center items-center flex-wrap">
        <DiaryItemCount count={count} />
      </div>
    </li>
  );
}
