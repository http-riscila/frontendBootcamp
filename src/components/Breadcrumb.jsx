import { useLocation, Link } from "react-router-dom";
import arrowIcon from "../assets/icons/arrow-icon.svg";

export default function Breadcrumb() {
  const location = useLocation();

  const paths = location.pathname.split("/").filter((p) => p !== "");

  return (
    <nav
      aria-label="breadcrumb"
      className="flex flex-row gap-1 items-center text-[var(--color-text)] text-[12px] font-inter"
    >
      <Link
        to="/home"
        className={`${
          location.pathname === "/home"
            ? "font-semibold text-[var(--color-primary)]"
            : " font-normal text-[var(--color-text)]"
        }`}
      >
        Home
      </Link>
      {paths.map((path, index) => {
        const pathTo = "/" + paths.slice(0, index + 1).join("/");
        const isActive = location.pathname === pathTo;
        return (
          <span
            key={index}
            className="flex flex-row gap-1 items-center text-base"
          >
            {" "}
            <img
              src={arrowIcon}
              alt="Arrow"
              className="w-[18px] h-[18px]"
            />{" "}
            <Link
              to={pathTo}
              className={`capitalize text-[12px] ${
                isActive
                  ? "font-semibold text-[var(--color-primary)]"
                  : "font-normal text-[var(--color-text)]"
              }`}
            >
              {decodeURIComponent(path)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
