import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChapterOne } from "../modules/chapter-1";
import { ChapterTwo } from "../modules/chapter-2";
import SignIn from "../modules/chapter-2/widgets/auth";
import LayoutInit from "../components/LayoutInit";
import { ChapterThree } from "../modules/chapter-3";

export default function BaseRoute() {
  const panco = [
    { path: "chapter-1", element: <ChapterOne /> },
    { path: "chapter-2", element: <ChapterTwo /> },
    { path: "chapter-3", element: <ChapterThree /> },
  ];
  return (
    <React.Suspense>
      <Routes>
        <Route
          index
          element={
            <LayoutInit>
              <ChapterOne />
            </LayoutInit>
          }
        />
        <Route path="chap2" element={<ChapterTwo />} />
        <Route path="chap3" element={<ChapterThree />} />
        <Route path="sign-in" element={<SignIn />} />
        {panco.map((a) => {
          <Route path={a.path} element={a.element} />;
        })}
      </Routes>
    </React.Suspense>
  );
}
