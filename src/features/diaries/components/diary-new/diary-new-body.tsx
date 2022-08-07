import { clazz } from "@ce1pers/use-class";
import { DiaryNewBodyProps } from "@/features/diaries/types";

export default function DiaryNewBody({
  rest,
  inputRef,
  content,
  textLength,
  errors,
  onSubmit,
  refCallBack,
  textLengthIsValid,
}: DiaryNewBodyProps) {
  const hasLength = () => content?.length;

  return (
    <section className="pt-5">
      <form className="space-y-5" onSubmit={onSubmit}>
        <div className="flex flex-col space-y-3 ">
          <div className="font-diary relative border rounded-md shadow-md overflow-hidden">
            {/* Inputs */}
            <textarea
              {...rest}
              ref={(e) => {
                refCallBack(e);
                inputRef.current = e;
              }}
              id="diary-new-input"
              className={clazz(
                "w-full text-xl p-8 min-h-[300px] rounded-md outline-none resize-none tracking-[3px]",
                hasLength() ? "is-active" : ""
              )}
              autoComplete="off"
              spellCheck="false"
              required
            ></textarea>

            {/* Placeholder */}
            <span
              id="diary-new-input-placeholder"
              className="absolute top-10 left-10 tracking-[3px] text-lg"
              onClick={() => inputRef.current?.focus()}
            >
              Enter any story
            </span>
            {/* Text length */}
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
            <p className="text-error">{errors.content.message}</p>
          )}
          {errors.content?.type === "validate" && (
            <p className="text-error">
              Content is should be less than 200 digits.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
