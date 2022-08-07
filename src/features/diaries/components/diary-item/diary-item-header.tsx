import SexyHorizontalButton from "@/shared/components/sexy-horizontal-button";

interface DiaryItemHeaderProps {
  onClick: () => void;
}

export default function DiaryItemHeader({ onClick }: DiaryItemHeaderProps) {
  return (
    <section className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold tracking-widest">New Diary</h1>

      <SexyHorizontalButton
        classNames="border border-primary text-primary px-5"
        isFull={false}
        onClick={onClick}
      >
        <span>New</span>
      </SexyHorizontalButton>
    </section>
  );
}
