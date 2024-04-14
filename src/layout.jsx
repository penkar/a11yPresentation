import React from "react";
import { Link } from "react-router-dom";

export const Layout = ({ children, title = "Accessibility" }) => {
  React.useEffect(() => {
    const titleElement = document.querySelector("title");
    if (titleElement) titleElement.innerText = title;
  }, [title]);

  return (
    <>
      <header>
        <h1>Accessibility in practice</h1>
      </header>
      <main className="vertical">{children}</main>
      <footer>
        <Link to="/">Index</Link>
        <span>{title}</span>
        <span />
      </footer>
    </>
  );
};
