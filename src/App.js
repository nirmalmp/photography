import React, { Suspense } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
const Home = React.lazy(() => import("./pages/Home/Home"));

const App = () => {
  const location = useLocation();

  return (
    <>
      <div style={{ minHeight: "90vh" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default App;
