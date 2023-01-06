import React from "react";
import Header from "../layout/Header";

export default function Main() {
  return (
    <>
      <section>
        <div
          style={{
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage:
              "linear-gradient(270deg, rgba(176, 42, 42, .16) 0%, rgba(176, 42, 42, .56) 18.45%, rgba(176, 42, 42, .8) 49.67%, rgba(176, 42, 42, .56) 82.52%,    rgba(176, 42, 42, .196364) 99.7%,    rgba(189, 40, 40, 0) 99.71%,    rgba(203, 56, 55, 0) 99.72%,    rgba(203, 56, 55, .16) 99.73%),    url(https://static.npmjs.com/abf53a31b2da4657a1a004ee9358551c.png)",
          }}
        >
          <div
            style={{
              margin: "0 auto",
              padding: "4rem 1rem",
              maxWidth: "68rem",
              textAlign: "center",
            }}
          >
            <div style={{ margin: "0 5.3rem" }}>
              <h2
                style={{ margin: "5.3rem 0", fontSize: "8rem", color: "#fff" }}
              >
                Build amazing things
              </h2>
              <div style={{ color: "#fff" }}>
                <div style={{ fontSize: "1.6rem" }}>
                  We're npm, Inc., the company behind the npm Registry and npm
                  CLI. We offer those to the community for free, but our day job
                  is building and selling useful tools for developers like you.
                </div>
                <h2 style={{ margin: "3rem 0", fontSize: "3.6rem" }}>
                  Take your JavaScript development up a notch
                </h2>
                <div style={{ fontSize: "1.6rem" }}>
                  Get started today for free, or step up to npm Pro to enjoy a
                  premium JavaScript development experience, with features like
                  private packages.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
