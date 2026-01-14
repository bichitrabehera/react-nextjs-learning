import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Card title="hello" buttonText="Buy" />
        {/* <Card /> */}
        {/* <Card /> */}
      </div>
    </>
  );
};

export default App;
