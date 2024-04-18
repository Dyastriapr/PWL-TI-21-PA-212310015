import React from "react";
import { Routes, Route } from "react-router-dom";
import ChapterOne from "../modules/chapter-1/ChapterOne";
import { ChapterTwo } from "../modules/chapter-2";
import Auth from "../modules/chapter-2/widget/auth";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterTwo />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<ChapterTwo />} />
        <Route path="Signin" element={<Auth />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h3 className="text-center">Ini home looo…</h3>;
};

const Error = () => {
  return <h1>Error: 404 NOT FOUND!</h1>;
};
