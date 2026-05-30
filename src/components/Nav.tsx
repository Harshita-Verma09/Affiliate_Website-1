import { Link, useRouterState } from "@tanstack/react-router";

export default function Nav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">Glam Affiliate</Link>
        <nav className="nav-links">
          <Link to="/" className={path === "/" ? "active" : ""}>Home</Link>
          <Link to="/blog" className={path === "/blog" ? "active" : ""}>Blog</Link>
        </nav>
      </div>
    </header>
  );
}
