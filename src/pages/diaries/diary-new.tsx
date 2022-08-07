import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { clazz } from "@ce1pers/use-class";
import { createDiary } from "@/api/diaries/services";
import MainLayout from "@/layouts/main-layout";
import SexyHorizontalButton from "@/shared/components/sexy-horizontal-button";
import { extractTextLength } from "@/shared/libs/useString";
import { useLocation, useNavigate } from "react-router-dom";
import {
  dateToQueryString,
  queryStringToDate,
} from "@/shared/utils/date.utils";
import {
  CreateDiaryInput,
  CreateDiaryOutput,
  SimpleDate,
} from "@/api/diaries/types";
import SimpleLoadingText from "@/shared/components/simple-loading-text";
import { DiaryRoutes } from "@/shared/constants/routes";

const MAX_LENGTH = 100;

interface NewDiaryForm {
  content: string;
}

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

  const hasLength = () => watch("content")?.length;
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

  useEffect(() => {
    setTextLength(extractTextLength(watch("content")));
  }, [watch("content")]);

  const onValid = async ({ content }: NewDiaryForm) => {
    const date = queryStringToDate(search) as SimpleDate;
    mutate({
      ...date,
      content,
    });
  };

  if (isCreateLoading) return <SimpleLoadingText />;

  return (
    <MainLayout>
      <article className="p-10 space-y-5 divide-y">
        <section className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-widest">New Diary</h1>

          <SexyHorizontalButton
            classNames="border border-primary text-primary px-5"
            isFull={false}
            onClick={handleSubmit(onValid)}
          >
            <span>New</span>
          </SexyHorizontalButton>
        </section>

        <section className="pt-5">
          <form className="space-y-5" onSubmit={handleSubmit(onValid)}>
            <div className="flex flex-col space-y-3">
              <div className="font-diary relative overflow-hidden">
                <textarea
                  {...rest}
                  ref={(e) => {
                    ref(e);
                    inputRef.current = e;
                  }}
                  id="diary-new-input"
                  className={clazz(
                    "w-full text-xl p-8 min-h-[300px] rounded-md outline-none resize-none tracking-[3px] shadow-md",
                    hasLength() ? "is-active" : ""
                  )}
                  autoComplete="off"
                  spellCheck="false"
                  required
                ></textarea>

                <span
                  id="diary-new-input-placeholder"
                  className="absolute top-10 left-10 tracking-[3px] text-lg"
                  onClick={() => inputRef.current?.focus()}
                >
                  Enter any story
                </span>

                <span
                  id="diary-new-text-length"
                  className={clazz(
                    "absolute bottom-3 right-3 z-10 text-sm",
                    textLengthIsValid() ? "text-gray-500" : "text-primary"
                  )}
                >
                  {textLength} / 100
                </span>
              </div>
              {errors.content?.message && (
                <span className="text-error">{errors.content.message}</span>
              )}
              {errors.content?.type === "validate" && (
                <span className="text-error">
                  Content is should be less than 200 digits.
                </span>
              )}
            </div>
          </form>
        </section>
      </article>
    </MainLayout>
  );
}
