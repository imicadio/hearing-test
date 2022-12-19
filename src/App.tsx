import React from "react";

import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Routing from "./routing/routing";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <section className="container mx-auto max-w-screen-lg flex flex-1 p-3 ">
        <Routing />
      </section>
      <Footer />
    </div>
  );
}

export default App;
