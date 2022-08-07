import { DiaryItemCountProps } from "@/features/diaries/types";

// When exist count value.
const diaryItemCountContainerStyle =
  "w-full h-full flex justify-center items-center gap-2 child-text-hover";
const diaryItemCountTextStyle = "text-sm text-white";
const diaryItemIconStyle = "h-6 w-6 text-white";

// When not exist count value.
const diaryNoItemContainerStyle =
  "child-text-hover h-full w-full flex justify-center items-center";

export default function DiaryItemCount({ count }: DiaryItemCountProps) {
  if (!count)
    return (
      <div className={diaryNoItemContainerStyle}>
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
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    );

  return (
    <p className={diaryItemCountContainerStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={diaryItemIconStyle}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>

      <span className={diaryItemCountTextStyle}>x</span>
      <span className={diaryItemCountTextStyle}>{count}</span>
    </p>
  );
}
