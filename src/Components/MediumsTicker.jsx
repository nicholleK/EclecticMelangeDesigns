import React from "react";

const ITEMS = [
  "Interior Decor",
  "Web Design",
  "Photography",
  "Branding",
  "App Design",
  "Videography",
  "Event Design",
  "Illustration",
];

// A continuously scrolling strip of disciplines — reinforces the "many
// mediums, one studio" idea. Doubled so the loop is seamless.
function MediumsTicker() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {loop.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item}
            <span className="ticker-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default MediumsTicker;
