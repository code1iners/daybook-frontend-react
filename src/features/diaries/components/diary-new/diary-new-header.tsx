import SexyHorizontalButton from "@/shared/components/sexy-horizontal-button";
import { DiaryNewHeaderProps } from "@/features/diaries/types";

export default function DiaryNewHeader({
  title,
  onClick,
  buttonText,
}: DiaryNewHeaderProps) {
  return (
    <section className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold tracking-widest">{title}</h1>

      <SexyHorizontalButton
        classNames="border border-primary text-primary px-3"
        isFull={false}
        onClick={onClick}
      >
        <span className="tracking-wider uppercase text-sm">{buttonText}</span>
      </SexyHorizontalButton>
    </section>
  );
}
