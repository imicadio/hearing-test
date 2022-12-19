import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IButton } from "./models";

const Button: FC<IButton> = ({ link, customClass }) => {

    const returnClass = classNames('inline-block bg-lime-500 py-3 px-5 mt-2 rounded-full text-white', customClass)

  return (
      <Link
        to={link}
        className={returnClass}
      >
        Go to test
      </Link>
  );
};

export default Button;
