import React, { useState, useEffect, useCallback } from "react";
import { navigate } from "gatsby";
import * as JsSearch from "js-search";
import * as styles from "./SearchContainer.module.scss";

export default function SearchContainer({ searchIndex }) {
  const [search, setSearch] = useState({
    results: [],
    engine: {},
    query: "",
  });

  const rebuildIndex = useCallback(() => {
    const searchEngine = new JsSearch.Search("slug");
    searchEngine.indexStrategy = new JsSearch.PrefixIndexStrategy();
    searchEngine.searchIndex = new JsSearch.TfIdfSearchIndex("slug");

    /*
    tf - term frequency | Idf - inverse document frequency

    The word is "cat" and it appears 3 time in the document with 100 words.
    tf -> 3 / 100 = 0.03
    
    If there are 10 000 000 documents and the word "cat" appears 1000 time.
    idf -> log(10 000 000 / 1000) = 4
    
    0.03 * 4 = 0.12
    
    The word "cat" weight 0.12
    */

    searchEngine.addIndex("title");
    searchEngine.addIndex("subtitle");
    searchEngine.addDocuments(searchIndex.blogs);

    setSearch((search) => {
      return { ...search, engine: searchEngine };
    });
  }, []);

  useEffect(() => {
    rebuildIndex();
  }, [rebuildIndex]);

  // event
  const performSearch = (e) => {
    const { value } = e.target;
    const results = search.engine.search(value);
    setSearch({ ...search, results, query: value });
  };

  console.log(search.query);

  return (
    <div>
      <input
        onChange={performSearch}
        value={search.query}
        style={{ width: "928px" }}
        className="input"
        type="text"
        placeholder="Search"
      />
      {search.results.length > 0 && (
        <div className={`${styles.options} select is-multiple`}>
          <ul>
            {search.results.map((result) => (
              <li
                onClick={() => navigate(`/blogs/${result.slug}`)}
                role="presentation"
                key={result.slug}
                className={`${styles.option} p-2`}
              >
                <p className={`${styles.title}`}>{result.title}</p>
                <p className={`${styles.subtitle}`}>{result.subtitle}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
