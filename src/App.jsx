import React from "react";
import {  Route, Routes } from "react-router";
import Layout from "./layout";
import { HomePage } from "./pages";
import './theme'
function App() {
  return (

      <Routes>

        <Route   element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route index element={<HomePage />} />


        </Route>
      </Routes>
 
  );
}

export default App;
