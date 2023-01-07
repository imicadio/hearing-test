import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AnimationLayout from "../components/animation-layout/animation-layout";
import { ROUTER } from "../shared/router";

const Loader = lazy(() => import("../components/loader/loader"));

const Home = lazy(() => import("../pages/home/home"));
const Instruction = lazy(() => import("../pages/instruction/instruction"));
const Headphones = lazy(() => import("../pages/headphones/headphones"));
const Sounds = lazy(() => import("../pages/sounds/sounds"));
const Question = lazy(() => import("../pages/question/question"));

const Routing: FC<{}> = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path={ROUTER.HOME} element={<Home />} />
          <Route path={ROUTER.INSTRUCTION} element={<Instruction />} />
          <Route path={ROUTER.HEADPHONES} element={<Headphones />} />
          <Route path={ROUTER.CALIBRATED} element={<Sounds />}>
            <Route path=":sound" element={<Sounds />} />
          </Route>
          <Route path={ROUTER.QUESTION} element={<Question />} />
          <Route path={ROUTER.QUESTION + "/:question"} element={<Question />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
