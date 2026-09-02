import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Seo } from "../components/Seo";

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="This page does not exist. Head back to the IS portfolio home page."
        path="/404"
        noIndex
      />
      <Nav variant="project" />
      <main className="page-gutter flex min-h-screen flex-col items-center justify-center text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-text md:text-7xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-10 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium uppercase tracking-wider text-black transition-transform hover:scale-105"
          data-cursor="Home"
        >
          Back home
        </Link>
      </main>
    </>
  );
}
