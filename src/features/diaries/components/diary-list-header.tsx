import SimpleArrowButton from "@/shared/components/simple-arrow-button";

interface DiaryListHeaderProps {
  year?: number;
  month?: number;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

export default function DiaryListHeader({
  year,
  month,
  onLeftClick,
  onRightClick,
}: DiaryListHeaderProps) {
  const now = new Date();

  return (
    <section className="flex justify-center items-center gap-5">
      <SimpleArrowButton direction="left" onArrowClick={onLeftClick} />

      <h1 className="text-2xl font-semibold tracking-widest cursor-default">
        {year || now.getFullYear()}년 {month || now.getMonth() + 1}월
      </h1>

      <SimpleArrowButton direction="right" onArrowClick={onRightClick} />
    </section>
  );
}
