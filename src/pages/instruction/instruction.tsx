import React, { FC } from "react";
import Button from "../../common/button/button";
import { ROUTER } from "../../shared/router";

const Instruction: FC<{}> = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-sky-500 text-center pb-3">Instructions</h1>
      <h2 className="my-4 text-2xl text-center font-bold">Before start</h2>
      <p className="mb-5">
        Once your test is complete, you will need to provide your contact
        details in order to obtain the hearing screener results and to receive
        more information about Phonak products and services.
      </p>
      <Button
        link={ROUTER.EQUIPMENT}
        customClass="w-full text-center sm:w-fit"
      />
    </div>
  );
};

export default Instruction;
