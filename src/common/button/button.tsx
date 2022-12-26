import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IButton } from "./models";

const Button: FC<IButton> = ({ link, customClass }) => {

    const returnClass = classNames("inline-block bg-lime-500 py-3 px-5 rounded-full text-white shadow-lg shadow-lime-500/50 hover:before:content-['']", customClass)

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
