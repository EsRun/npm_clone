import React from "react";

export default function Error() {
  return (
    <>
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            padding: "4rem 1.6rem",
            maxWidth: "68rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: "2.1rem 0", fontSize: "3.2rem" }}>not found</h1>
          <p style={{ marg: "1.6rem 0", fontSize: "1.6rem" }}>
            Route not found!
          </p>
          <img
            style={{ maxWidth: "51.2rem" }}
            src="https://static.npmjs.com/2f55441126e3c8d643c4c2d4e852cb4c.png"
            alt='"Missing" poster depicting npm&apos;s mascot wombat'
          />
        </div>
      </main>
    </>
  );
}
