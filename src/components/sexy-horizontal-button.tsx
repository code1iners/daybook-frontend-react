interface SexyHorizontalButtonProps {
  onClick: () => void;
}

export default function SexyHorizontalButton({
  onClick,
}: SexyHorizontalButtonProps) {
  return (
    <button
      className="w-full border border-black rounded-md flex justify-center items-center p-2 transition-colors text-gray-600 hover:text-primary hover:border-primary"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  );
}
