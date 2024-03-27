import React from "react";
import { Routes, Route } from "react-router-dom";
import ChapterOne from "../modules/ChapterOne";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterOne />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h3 className="text-center">Ini home looo…</h3>;
};
