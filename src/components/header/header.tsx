import React, { FC } from "react";

const Header: FC<{}> = () => {
  return (
    <header className="bg-slate-200 p-3">
      <div className="container mx-auto max-w-screen-lg">
        <h2>Logo</h2>
      </div>
    </header>
  );
};

export default Header;
