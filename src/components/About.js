import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        https://open.spotify.com/track/4TxaDMTivAvGYVDV1BTNu3?si=b4a62de2387e403b
      </p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
