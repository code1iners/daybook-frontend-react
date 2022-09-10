import type { UseFormRegisterReturn } from "react-hook-form";
import { clazz } from "@ce1pers/use-class";

interface SexyInputProps {
  register: UseFormRegisterReturn;
  error?: string | undefined;
  autoCapitalize?: "on" | "sentences" | "off" | "none" | "words" | "characters";
  autoComplete?: "off" | "on";
  required?: boolean;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  placeholder?: string;
  className?: string;
}

export default function SexyInput({
  register,
  error,
  autoCapitalize = "off",
  autoComplete = "off",
  required = true,
  type = "text",
  placeholder = "Enter any placeholder..",
  className,
}: SexyInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        {...register}
        className={clazz(
          "border p-3 rounded-md tracking-widest",
          className || ""
        )}
        type={type}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        required={required}
      />
      <span className="text-error">{error}</span>
    </div>
  );
}
