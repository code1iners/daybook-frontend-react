import SexyHorizontalButton from "@/shared/components/sexy-horizontal-button";
import { DiaryNewHeaderProps } from "@/features/diaries/types";

export default function DiaryNewHeader({ onClick }: DiaryNewHeaderProps) {
  return (
    <section className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold tracking-widest">New Diary</h1>

      <SexyHorizontalButton
        classNames="border border-primary text-primary px-3"
        isFull={false}
        onClick={onClick}
      >
        <span className="tracking-wider uppercase text-sm">write</span>
      </SexyHorizontalButton>
    </section>
  );
}
