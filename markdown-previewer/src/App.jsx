import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function App() {
  let [markdown, setMarkdown] = useState(() => {
    let getMark = localStorage.getItem("markdown");

    if (getMark) {
      return getMark;
    } else {
      return "# Markdown Previewer";
    }
  });


  localStorage.setItem("markdown", markdown);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>

      <div className="main">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="right"
          placeholder="Enter Markdown Here"
        ></textarea>{" "}
        <ReactMarkdown className={`left`}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
