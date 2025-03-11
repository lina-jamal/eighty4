import React from "react";
import { Outlet } from "react-router";
import { Footer, Navbar } from "../components";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
`;

const Page = styled.div``;

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
