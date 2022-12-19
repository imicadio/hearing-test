import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTER } from "../shared/router";

const Loader = lazy(() => import("../components/loader/loader"));

const Home = lazy(() => import("../pages/home/home"));
const Equipment = lazy(() => import("../pages/equipment/equipment"));

const Routing: FC<{}> = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route path={ROUTER.EQUIPMENT} element={<Equipment />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
