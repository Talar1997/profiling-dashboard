import { Layout } from "antd";

import React, { useState } from "react";

import "../assets/Layout.scss";
import SignedFooter from "./SignedFooter";
import Sidebar from "./Sidebar";
import CustomHeader from "./CustomHeader";
import ContentContainer from "./ContentContainer";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout id="globalLayout">
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <ContentContainer />
        <SignedFooter />
      </Layout>
    </Layout>
  );
}
