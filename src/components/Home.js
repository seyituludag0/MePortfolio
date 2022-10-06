import React, { Fragment } from "react";
import { environment } from "../environment.prod";

export default function Home() {
  return (
    <Fragment>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>{environment.name}</h1>
          <p>
            I'm
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            />
          </p>
        </div>
      </section>
    </Fragment>
  );
}
