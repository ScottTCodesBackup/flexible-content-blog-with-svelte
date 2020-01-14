import React from "react";

const emoji = type => {
  return () => (
    <span role="img" style={{ fontSize: "2rem" }}>
      {type}
    </span>
  );
};

export default emoji;