import React, { useEffect } from "react";

function View(props) {
  useEffect(() => {
    document.title = "Fuzzy monitor - " + props.title || "Fuzzy monitor";
  }, [props.title]);

  return <>{props.children}</>;
}

export default View;
