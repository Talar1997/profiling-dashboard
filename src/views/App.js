import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import "../assets/index.css";
import MainLayout from "../layout/MainLayout";

export default function App() {
  return <MainLayout />;
}

render(<App />, document.getElementById("root"));
