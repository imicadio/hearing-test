import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IButton } from "./models.d";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const Button: FC<IButton> = ({
  type = "button",
  isBack,
  onClick,
  link = "",
  customClass,
  children = "",
  isSound,
  disable = false,
}) => {
  const returnClass = classNames(customClass, {
    [`inline-block bg-lime-500 py-3 px-5 rounded-full text-white shadow-lg shadow-lime-500/50 hover:before:content-['']`]:
      type === "button" && !isBack,
    [`mb-4 flex`]: isBack,
    [`disabled:opacity-75 disabled:bg-gray-500 disabled:shadow-gray-500/50`]: isSound
  });

  if (isBack) {
    return (
      <button type={type} onClick={onClick} className={returnClass}>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> Back
      </button>
    );
  }

  if (isSound) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={returnClass}
        disabled={disable}
      >
        {children}
      </button>
    );
  }

  return (
    <Link to={link} className={returnClass}>
      {children}
    </Link>
  );
};

export default Button;
