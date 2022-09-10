import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";
import MainLayout from "@/layouts/main-layout";
import DiaryItemHeader from "@/features/diaries/components/diary-new/diary-new-header";
import DiaryItemBody from "@/features/diaries/components/diary-new/diary-new-body";
import { NewDiaryForm } from "@/features/diaries/types";
import { extractTextLength } from "@/shared/libs/useString";
import { useDiaryDetail } from "@/features/diaries/hooks/useDiary";
import { GetDiaryInput } from "@/api/diaries/types";
import SimpleLoadingText from "@/shared/components/simple-loading-text";
import SimpleErrorText from "@/shared/components/simple-error-text";

const MAX_LENGTH = 100;

export default function DiaryEdit() {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [textLength, setTextLength] = useState(0);
  const { search } = useLocation();
  const diaryId: GetDiaryInput = parse(search) as any;
  const { data, isLoading, isError } = useDiaryDetail(diaryId);

  if (isLoading) return <SimpleLoadingText />;
  if (isError) return <SimpleErrorText />;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewDiaryForm>();

  const onValid = () => {};

  const textLengthIsValid = () =>
    extractTextLength(watch("content")) <= MAX_LENGTH;

  const { ref, ...rest } = register("content", {
    required: "Content is required.",
    minLength: {
      value: 10,
      message: "Content is should be greater than 10 digits.",
    },
    validate: textLengthIsValid,
  });

  return (
    <MainLayout>
      <article className="p-10 space-y-5 divide-y">
        {/* Header */}
        <DiaryItemHeader
          title="Edit Diary"
          buttonText="Modify"
          onClick={handleSubmit(onValid)}
        />

        {/* Body */}
        <DiaryItemBody
          refCallBack={ref}
          rest={rest}
          textLength={textLength}
          textLengthIsValid={textLengthIsValid}
          content={watch("content")}
          onSubmit={handleSubmit(onValid)}
          inputRef={inputRef}
          errors={errors}
        />
      </article>
    </MainLayout>
  );
}
