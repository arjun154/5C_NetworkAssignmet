import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Styles from "./homepage.module.css";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const history = useHistory();

  return (
    <div>
      <input
        className={Styles.inputBox}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter UserName...."
      />
      <button
        className={Styles.searchButton}
        onClick={() => history.push(`/repo/${query}`)}
      >
        Search
      </button>
    </div>
  );
}
