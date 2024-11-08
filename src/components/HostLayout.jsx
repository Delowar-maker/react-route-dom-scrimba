import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          lassName={({ isActive }) => (isActive ? "active-link" : null)}
          to="vans"
        >
          vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
