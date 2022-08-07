export interface DiaryItemProps {
  year?: number;
  month?: number;
  day?: number;
  count?: number;
}

export interface DiaryItemCountProps {
  count?: number;
}

export interface NewDiaryForm {
  content: string;
}

export interface DiaryNewBodyProps {
  onSubmit: () => void;
  refCallBack: RefCallBack;
  rest: Omit<UseFormRegisterReturn, "ref">;
  inputRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  content?: string;
  textLengthIsValid: () => boolean;
  textLength: number;
  errors: FieldErrorsImpl<DeepRequired<NewDiaryForm>>;
}

export interface DiaryNewHeaderProps {
  onClick: () => void;
}
