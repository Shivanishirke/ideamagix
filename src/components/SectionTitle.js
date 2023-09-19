import React from "react";

const SectionTite = ({ title }) => {
  return (
    <>
      <h2 className="sectionTitle">
        {title}
        <span className="redDot">.</span>
      </h2>
    </>
  );
};

export default SectionTite;
