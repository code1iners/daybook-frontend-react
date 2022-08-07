import { clazz } from "@ce1pers/use-class";
import type {
  DeepRequired,
  FieldErrorsImpl,
  RefCallBack,
  UseFormRegisterReturn,
} from "react-hook-form";
import { NewDiaryForm } from "@/features/diaries/types";

interface DiaryItemBodyProps {
  onSubmit: () => void;
  refCallBack: RefCallBack;
  rest: Omit<UseFormRegisterReturn, "ref">;
  inputRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  content?: string;
  textLengthIsValid: () => boolean;
  textLength: number;
  errors: FieldErrorsImpl<DeepRequired<NewDiaryForm>>;
}

export default function DiaryItemBody({
  onSubmit,
  rest,
  refCallBack,
  inputRef,
  content,
  textLengthIsValid,
  textLength,
  errors,
}: DiaryItemBodyProps) {
  const hasLength = () => content?.length;

  return (
    <section className="pt-5">
      <form className="space-y-5" onSubmit={onSubmit}>
        <div className="flex flex-col space-y-3">
          <div className="font-diary relative overflow-hidden">
            {/* Inputs */}
            <textarea
              {...rest}
              ref={(e) => {
                refCallBack(e);
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

          {/* Errors */}
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
  );
}
