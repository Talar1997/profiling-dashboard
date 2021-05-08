import React, { useEffect } from "react";

function View(props) {
  useEffect(() => {
    document.title = "Profiling Dashboard - " + props.title || "Profiling Dashboard";
  }, [props.title]);

  return <>{props.children}</>;
}

export default View;
