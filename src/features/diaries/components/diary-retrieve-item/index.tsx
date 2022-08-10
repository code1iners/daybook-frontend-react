import { useNavigate } from "react-router-dom";
import qs from "query-string";
import { useMutation } from "@tanstack/react-query";
import { deleteDiary } from "@/api/diaries/services";
import type { DiaryRetrieveItemProps } from "@/features/diaries/types";
import type { AxiosError } from "axios";
import { DiaryRoutes } from "@/shared/constants/routes";
import { useEffect } from "react";

export default function DiaryRetrieveItem({ diary }: DiaryRetrieveItemProps) {
  const navigator = useNavigate();

  // deleteD
  const { mutate, error, isError } = useMutation(deleteDiary);
  useEffect(() => {
    if (error && isError) alert(`Failed delete diary (${diary.diaryId}).`);
  }, [error, isError]);

  const onEditClick = () => {
    const url = qs.stringifyUrl({
      url: DiaryRoutes.Edit,
      query: { diaryId: diary.diaryId },
    });
    navigator(url);
  };

  const onRemoveClick = () => {
    // Remove diary by id.
    mutate({ diaryId: diary.diaryId });
  };

  return (
    <li className="w-full border rounded-lg shadow-md min-h-[300px] font-diary">
      <div className="px-5 py-2 flex items-center justify-between space-y-2 border-b">
        <span className="tracking-wider opacity-50 cursor-default hover-scale">{`${diary.year}.${diary.month}.${diary.day}`}</span>
        <div className="flex items-center gap-5">
          <button className="hover-scale-color" onClick={onEditClick}>
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
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button className="hover-scale-color" onClick={onRemoveClick}>
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-5 tracking-widest">{diary.content}</div>
    </li>
  );
}
