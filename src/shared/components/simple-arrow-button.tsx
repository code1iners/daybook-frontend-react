import { clazz } from "@ce1pers/use-class";

interface SimpleArrowButtonProps {
  direction: "left" | "right" | "top" | "bottom";
  onArrowClick?: () => void;
}

export default function SimpleArrowButton({
  direction,
  onArrowClick,
}: SimpleArrowButtonProps) {
  const parsedDirection = () => {
    switch (direction) {
      case "right":
        return "rotate-180";

      case "top":
        return "rotate-90";

      case "bottom":
        return "-rotate-90";

      default:
        return "";
    }
  };

  return (
    <button
      className={clazz(
        "transition-transform hover:scale-125",
        parsedDirection()
      )}
      onClick={onArrowClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
