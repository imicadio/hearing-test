import React, { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { PageAnimation } from "../page-animation/page-animation";
import { pageTransition, pageVariants } from "../../shared/motion-constants";

const AnimationLayout: FC<{}> = () => {
  const { pathname } = useLocation();

  return (
    <PageAnimation>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
        className="shadow-xl"
      >
        <Outlet />
      </motion.div>
    </PageAnimation>
  );
};

export default AnimationLayout;
