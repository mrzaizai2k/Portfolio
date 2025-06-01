import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Freelancer",
          "AI/ML Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
