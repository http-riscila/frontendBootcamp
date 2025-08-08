import { useLocation, Link } from "react-router-dom";
//import arrowIcon from "../assets/icons/arrow-icon.svg";

export default function Breadcrumb({ community }) {
  const location = useLocation();

  //const paths = location.pathname.split("/").filter((p) => p !== "");
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (pathnames.length === 0) {
    return null;
  }

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

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
      {pathnames.map((value, index) => {
        //const pathTo = "/" + paths.slice(0, index + 1).join("/");
        //const isActive = location.pathname === pathTo;
        const isLast = index === pathnames.length - 1;
        if (index === 0) {
          return (
            <span key={value}>
              {' > '}
              {isLast ? (
                capitalize(value)
              ) : (
                <Link to={`/${value}`}>{capitalize(value)}</Link>
              )}
            </span>
          );
          }
          if (index === 1) {
          return <span key={value}>{' > '}{community?.name}</span>;
        }
        return null;
        
      })}
    </nav>
  );
}
