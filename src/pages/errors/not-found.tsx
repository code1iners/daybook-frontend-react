import { useNavigate } from "react-router-dom";
import { DiaryRoutes } from "@/shared/constants/routes";

export default function NotFound() {
  const navigation = useNavigate();
  const onTextClick = () => navigation(DiaryRoutes.Diaries, { replace: true });

  return (
    <article className="h-screen flex justify-center items-center">
      <p
        className="cursor-pointer pl-2 border-l-2 border-black transition-all hover:scale-110"
        onClick={onTextClick}
      >
        Page Not Found
      </p>
    </article>
  );
}
