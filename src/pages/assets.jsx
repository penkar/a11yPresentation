import { Link } from "react-router-dom";

export const Assets = () => (
  <>
    <header>
      <h1>Accessibility in practice</h1>
    </header>
    <main className="vertical">
      <ul>
        <li>
          <Link to="taxforms">Tax Froms - Cycorp Example</Link>
        </li>
        <li>
          <Link to="badformatting">Bad Input and Label Example</Link>
        </li>
        <li>
          <Link to="badformatting2">Bad Input and Label Example - 2</Link>
        </li>
        <li>
          <Link to="goodformatting">Improved Formatting Input and Labels</Link>
        </li>
        <li>
          <Link to="semantichtml">Semantic HTML Example</Link>
        </li>
        <li>
          <Link to="colors">Color Choice Example</Link>
        </li>
        <li>
          <Link to="references">References</Link>
        </li>
      </ul>
    </main>
    <footer>By Jeffrey Penkar</footer>
  </>
);
