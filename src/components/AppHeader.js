import React, { useState } from "react";
import { Link } from "gatsby";

export default function AppHeader({ seo }) {
  const twitterMessage = seo?.title
    ? `Check out "${seo.title}" at`
    : "Join Codecademia!";

  const twitterUrl = seo?.url || "";

  const [isActive, setisActive] = useState(false);

  return (
    <nav className="navbar is-transparent mb-5 p-5">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 className="title">Codecademia</h1>
        </Link>
        <div
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          data-target="navbarExampleTransparentExample"
          aria-label="Open the menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        id="navbarExampleTransparentExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/blogs">
            Blogs
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a
                  className="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="https://codecademia.gatsbyjs.io/"
                  rel="noreferrer"
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?text=${twitterMessage}&hashtags=codecademia&url=${process.env.BASE_URL}${twitterUrl}`}
                >
                  <span>Tweet</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
