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
              padding: "4rem 1.6rem",
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
                <div
                  style={{
                    marginTop: "8rem",
                    display: "flex",
                    justifyContent: "space-around",
                    fontSize: "1.6rem",
                    fontWeight: "bold",
                  }}
                >
                  <div
                    style={{
                      padding: "1.6rem 3.2rem",
                      width: "230px",
                      backgroundColor: "#FFC329",
                      boxShadow: "0px 10px 30px rgb(0 0 0 / 40%)",
                      borderRadius: "5rem",
                      color: "#000",
                    }}
                  >
                    <a style={{}}>Sign up for free</a>
                  </div>
                  <div
                    style={{
                      padding: "1.6rem 3.2rem",
                      width: "230px",
                      border: "2px solid #fff",
                      borderRadius: "5rem",
                    }}
                  >
                    <a style={{ color: "#fff" }}>Learn about Pro</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            padding: "6.4rem 1.6rem",
            margin: "0 auto 8rem",
            width: "548px",
            textAlign: "center",
          }}
        >
          <div>
            <img
              alt=""
              role="presentation"
              src="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png"
              srcSet="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png, https://static.npmjs.com/attachments/ck3uwed1cmso79y74pjugy10f-gak-2x.png 2x, https://static.npmjs.com/attachments/ck3uweeyt72yk887420va22p9-gak-3x.png 3x"
              className="db center mb4"
            ></img>
          </div>
          <div
            style={{ margin: "3rem 0", fontSize: "3.6rem", fontWeight: "bold" }}
          >
            Bring the best of open source to you, your team, and your company
          </div>
          <div style={{ fontSize: "1.6rem" }}>
            Relied upon by more than 11 million developers worldwide, npm is
            committed to making JavaScript development elegant, productive, and
            safe. The free npm Registry has become the center of JavaScript code
            sharing, and with more than one million packages, the largest
            software registry in the world. Our other tools and services take
            the Registry, and the work you do around it, to the next level.
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage:
              "linear-gradient(270deg, rgba(176, 42, 42, .16) 0%, rgba(176, 42, 42, .56) 18.45%, rgba(176, 42, 42, .8) 49.67%, rgba(176, 42, 42, .56) 82.52%, rgba(176, 42, 42, .196364) 99.7%, rgba(189, 40, 40, 0) 99.71%, rgba(203, 56, 55, 0) 99.72%,rgba(203, 56, 55, .16) 99.73%),url(https://static.npmjs.com/3dc2ca3d2e53fc894b904d917cf90015.png)",
          }}
        >
          <div
            style={{
              padding: "6.4rem 1.6rem",
              margin: "0 auto",
              width: "548px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                marginBottom: "4rem",
                fontSize: "4.8rem",
              }}
            >
              We love open source
            </h2>
            <div style={{ fontSize: "1.6rem" }}>
              At npm, Inc., we're proud to dedicate teams of full-time employees
              to operating the npm Registry, enhancing the CLI, improving
              JavaScript security, and other projects that support and nurture a
              vibrant open source community.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            padding: "6.4rem 1.6rem",
            margin: "0 auto 8rem",
            width: "548px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "3.6rem" }}>
            Gratefully serving everyone from solo devs to the Fortune 500
          </h2>
        </div>
      </section>
    </>
  );
}
