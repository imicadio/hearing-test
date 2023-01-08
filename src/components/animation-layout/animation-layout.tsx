import React, { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageAnimation } from "../page-animation/page-animation";
import { pageTransition, pageVariants } from "../../shared/motion-constants";
import Button from "../../common/button/button";
import { ROUTER } from "../../shared/router";
import { useDispatch } from "react-redux";
import {
  selectedPageBackward,
  SET_PAGE_BACKWARD,
} from "../../redux/slice/soundSlice/soundSlice";
import { useSelector } from "react-redux";

const AnimationLayout: FC<{}> = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const selectPageBackward = useSelector(selectedPageBackward);

  const pageBackward = () => {
    dispatch(SET_PAGE_BACKWARD(!selectPageBackward));
    navigate(-1);
  };

  const renderBackBtn =
    pathname === ROUTER.HOME ? null : (
      <Button type="button" onClick={pageBackward} isBack />
    );

  return (
    <PageAnimation>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
        className="md:shadow-xl w-full"
      >
        {renderBackBtn}
        <Outlet />
      </motion.div>
    </PageAnimation>
  );
};

export default AnimationLayout;
