import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AnimationLayout from "../components/animation-layout/animation-layout";
import { ROUTER } from "../shared/router";

const Loader = lazy(() => import("../components/loader/loader"));

const Home = lazy(() => import("../pages/home/home"));
const Instruction = lazy(() => import("../pages/instruction/instruction"));
const Equipment = lazy(() => import("../pages/equipment/equipment"));

const Routing: FC<{}> = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path={ROUTER.HOME} element={<Home />} />
          <Route path={ROUTER.INSTRUCTION} element={<Instruction />} />
          <Route path={ROUTER.EQUIPMENT} element={<Equipment />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
