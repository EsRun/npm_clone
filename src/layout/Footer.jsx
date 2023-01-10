import "../resources/css/footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-box">
            <div className="footer-row">
              <div className="" style={{ paddingTop: "2rem", width: "5rem" }}>
                <a
                  target="_blank"
                  title="npm repository"
                  rel="noopener noreferrer nofollow"
                  href="https://github.com/npm"
                >
                  <svg viewBox="0 0 27.23 27.23">
                    <rect
                      fill="#333333"
                      width="27.23"
                      height="27.23"
                      rx="2"
                    ></rect>
                    <polygon
                      fill="#fff"
                      points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"
                    ></polygon>
                  </svg>
                </a>
              </div>
              <div className="" style={{ paddingTop: "2rem", width: "5rem" }}>
                <a
                  target="_blank"
                  title="GitHub"
                  rel="noopener noreferrer nofollow"
                  href="https://github.com"
                >
                  <svg
                    aria-hidden="true"
                    role="img"
                    className=""
                    viewBox="0 0 16 16"
                    width="50"
                    height="50"
                    fill="black"
                    style={{
                      display: "inline-block",
                      userSelect: "none",
                      verticalAlign: "top",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-row">
              <span className="footer-row-title">Support</span>
              <ul className="">
                <li className="">
                  <a className="link" href="https://docs.npmjs.com">
                    Help
                  </a>
                </li>
                <li className="">
                  <a className="link" href="https://github.com/advisories">
                    Advisories
                  </a>
                </li>
                <li className="">
                  <a className="link" href="http://status.npmjs.org/">
                    Status
                  </a>
                </li>
                <li className="">
                  <a className="link" href="/support">
                    Contact npm
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-row">
              <span className="footer-row-title">Company</span>
              <ul className="">
                <li className="">
                  <a className="link" href="/about">
                    About
                  </a>
                </li>
                <li className="">
                  <a className="link" href="https://github.blog/tag/npm/">
                    Blog
                  </a>
                </li>
                <li className="">
                  <a className="link" href="/press">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-row">
              <span className="footer-row-title">Terms &amp; Policies</span>
              <ul className="">
                <li className="">
                  <a className="link" href="/policies/">
                    Policies
                  </a>
                </li>
                <li className="">
                  <a className="link" href="/policies/terms">
                    Terms of Use
                  </a>
                </li>
                <li className="">
                  <a className="link" href="/policies/conduct">
                    Code of Conduct
                  </a>
                </li>
                <li className="">
                  <a className="link" href="/policies/privacy">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
