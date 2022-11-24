import React from "react";

const SectionBox = ({ children , expanded }) => {
    return <><div className={ expanded + ' section-box p-2 rounded-xl shadow-lg' } >{ expanded && children }</div></>;
  };
  
export default SectionBox