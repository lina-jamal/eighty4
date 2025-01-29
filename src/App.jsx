import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout";
import { AboutPage, HomePage } from "./pages";
import "./theme";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
