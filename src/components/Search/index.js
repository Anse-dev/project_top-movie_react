import React, { useEffect, useRef, useState } from "react";

const SearchBar = ({ setSearch }) => {
  const [state, setState] = useState("");
  let ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearch(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearch, state]);
  return (
    <div>
      <input
        type="text"
        placeholder="cherchez un film"
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
    </div>
  );
};

export default SearchBar;
