import {Content} from "carbon-components-react/lib/components/UIShell"
import React from "react"

export default function StoryContainer(props) {
  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <section className="bx--offset-lg-3 bx--col-lg-13">
          {props.children}
        </section>
      </div>
    </div>
  );

  return <Content id="main-content">{content}</Content>;
};