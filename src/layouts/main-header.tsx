import { Link } from "react-router-dom";
import {
  AuthRoutes,
  DiaryRoutes,
  OtherRoutes,
  UserRoutes,
} from "@/shared/constants/routes";

export default function MainHeader() {
  return (
    <>
      <header className="h-header">
        <nav className="h-full">
          <ul className="h-full flex items-center justify-center gap-5">
            <li>
              <Link to={OtherRoutes.Root}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to={DiaryRoutes.Diaries}>diary</Link>
            </li>
            <li>
              <Link to={AuthRoutes.Login}>login</Link>
            </li>
            <li>
              <Link to={UserRoutes.Me}>me</Link>
            </li>
            <li>
              <Link to={OtherRoutes.Settings}>settings</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* <div className="h-11 opacity-0"></div> */}
    </>
  );
}
