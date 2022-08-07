import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import MainLayout from "@/layouts/main-layout";
import { createDiary } from "@/api/diaries/services";
import { SimpleDate } from "@/api/diaries/types";
import { NewDiaryForm } from "@/features/diaries/types";
import DiaryItemHeader from "@/features/diaries/components/diary-item/diary-item-header";
import DiaryItemBody from "@/features/diaries/components/diary-item/diary-item-body";
import { extractTextLength } from "@/shared/libs/useString";
import {
  dateToQueryString,
  queryStringToDate,
} from "@/shared/utils/date.utils";
import SimpleLoadingText from "@/shared/components/simple-loading-text";
import { DiaryRoutes } from "@/shared/constants/routes";

const MAX_LENGTH = 100;

export default function DiaryNew() {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [textLength, setTextLength] = useState(0);
  const { search } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<NewDiaryForm>();

  const {
    mutate,
    data,
    error,
    isSuccess: isCreateSuccess,
    isError: isCreateError,
    isLoading: isCreateLoading,
  } = useMutation(createDiary);

  const navigator = useNavigate();

  useEffect(() => {
    if (isCreateError) {
      console.error(error);
    } else if (isCreateSuccess && data) {
      const date = queryStringToDate(search) as SimpleDate;
      alert(data.message);

      navigator({
        pathname: DiaryRoutes.Retrieve,
        search: `?${dateToQueryString(date)}`,
      });
    }
  }, [isCreateSuccess, isCreateError, data]);

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

  useEffect(
    () => setTextLength(extractTextLength(watch("content"))),
    [watch("content")]
  );

  const onValid = async ({ content }: NewDiaryForm) => {
    const date = queryStringToDate(search) as SimpleDate;
    mutate({ ...date, content });
  };

  if (isCreateLoading) return <SimpleLoadingText />;

  return (
    <MainLayout>
      <article className="p-10 space-y-5 divide-y">
        {/* Header */}
        <DiaryItemHeader onClick={handleSubmit(onValid)} />

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
