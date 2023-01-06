import React, { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageAnimation } from "../page-animation/page-animation";
import { pageTransition, pageVariants } from "../../shared/motion-constants";
import Button from "../../common/button/button";
import { ROUTER } from "../../shared/router";

const AnimationLayout: FC<{}> = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const renderBackBtn =
    pathname === ROUTER.HOME ? null : (
      <Button type="button" onClick={() => navigate(-1)} isBack />
    );

  return (
    <PageAnimation>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
        className="md:shadow-xl"
      >
        {renderBackBtn}
        <Outlet />
      </motion.div>
    </PageAnimation>
  );
};

export default AnimationLayout;
