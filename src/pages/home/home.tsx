import React, { FC } from "react";
import image from "../../assets/headphones_guy.jpg";
import Button from "../../common/button/button";
import { ROUTER } from "../../shared/router";

const Home: FC<{}> = () => {
  return (
    <>
      <div className="grid grid-cols-2 place-items-center">
        <img src={image} alt="hearing test" className="" />
        <div className="">
          <h1 className="font-bold text-sky-500 text-left pb-3">
            Hearing test app
          </h1>
          <p className="max-w-md my-4">
            You need headphones or earphones for this test.
          </p>
          <p className="max-w-md mb-5">
            Once your test is complete, you will need to provide your contact
            details in order to obtain the hearing screener results and to
            receive more information about Phonak products and services.
          </p>
          <Button link={ROUTER.EQUIPMENT} />
        </div>
      </div>
    </>
  );
};

export default Home;
