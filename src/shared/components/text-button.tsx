interface TextButtonProps {
  text?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}

export default function TextButton({
  text = "Button",
  type = "submit",
  onClick,
}: TextButtonProps) {
  return (
    <button className="border p-3 rounded-md" type={type} onClick={onClick}>
      {text}
    </button>
  );
}
