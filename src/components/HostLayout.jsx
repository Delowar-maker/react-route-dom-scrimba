import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
