import React, { useState } from "react";
import { Layout, Row, Col } from "antd";
import Sidebar from "../sidebar/Sidebar";
import Document from "../document/Document";

export default function MainPage() {
  return (
    <>
      <Layout>
        <Layout style={{ padding: "30px" }}>
          <Row>
            <Col
              style={{ padding: "10px", border: "1px solid white" }}
              span={15}
            >
              <Document />
            </Col>
            <Col span={1}></Col>
            <Col
              style={{ padding: "10px", border: "1px solid white" }}
              span={8}
            >
              <Sidebar />
            </Col>
          </Row>
        </Layout>
      </Layout>
    </>
  );
}
