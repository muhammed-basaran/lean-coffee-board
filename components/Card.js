import React from "react";
import { Fragment } from "react";
import { nanoid } from "nanoid";

export default function Card({ entries }) {
  return (
    <>
      <section>
        {entries.map((entry) => (
          <Fragment key={nanoid()}>
            <h2>{entry.thoughts}</h2>
            <p>{entry.name}</p>
          </Fragment>
        ))}
      </section>
    </>
  );
}
