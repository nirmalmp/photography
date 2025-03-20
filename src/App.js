import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      <div style={{ minHeight: "90vh" }}>
        <Suspense>
          <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default App;
