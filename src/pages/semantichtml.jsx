// Semantic UI Page
import "./page1.css";

export const SemanticHTML = ({ setCurrentPage }) => (
  <>
    <div className="col">
      <div className="header">Header without Semantic HTML</div>
      <div className="main">
        <div className="slug">Advantages of Divs & Spans</div>
        <div className="list">
          <div className="list-item">
            1. Easy to get moving on an application
          </div>
          <div className="list-item">
            2. Avoid out of the box formatting issues
          </div>
          <div className="list-item">
            3. Avoid out of the box formatting issues
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="btn disabled">Previous</div>
        <span>&nbsp;Page 1&nbsp;</span>
        <div className="btn">Next</div>
      </div>
    </div>

    <span className="col">
      <header style={{ filter: `brightness(0.9)`, color: "#fff" }}>
        <h1>Header with Semantic HTML</h1>
      </header>
      <main style={{ backgroundColor: "whitesmoke" }}>
        <h2>Advantages of Semantic HTML</h2>
        <ul>
          <li>Semantics communicate meaning</li>
          <li>Built in roles, styles, tab-indexing</li>
          <li>Search Enging Optimization</li>
          <li>Tags are ready by Screen Readers and Feed Readers</li>
        </ul>
      </main>
      <footer>
        <button className="btn disabled" disabled>
          Previous
        </button>
        <span>&nbsp;Page 1&nbsp;</span>
        <button className="btn">Next</button>
      </footer>
    </span>
  </>
);
