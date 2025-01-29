import React from "react";
import { Outlet } from "react-router";
import { Footer, Navbar } from "../components";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #ffd8d8;
`;

const Page = styled.div`
  margin-top: 100px;
`;

function Layout() {
  return (
    <Wrapper>
      <Navbar />

      <Page>
        <Outlet />
      </Page>

      <Footer />
    </Wrapper>
  );
}

export default Layout;
