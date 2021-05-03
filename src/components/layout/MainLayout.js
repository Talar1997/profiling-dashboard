import { Layout } from "antd";

import React, { useState } from "react";

import "../../assets/Layout.scss";
import SignedFooter from "./SignedFooter";
import Sidebar from "./Sidebar";
import NavigationBar from "./NavigationBar";

export default function MainLayout(props) {
  //TODO: save collapsed in localStorage
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout id="globalLayout">
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <NavigationBar collapsed={collapsed} setCollapsed={setCollapsed} />
        {props.children}
        <SignedFooter />
      </Layout>
    </Layout>
  );
}
