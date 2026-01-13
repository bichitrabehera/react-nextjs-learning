import React from "react";

const App = () => {
  return (
    <>
      <div className="max-w-sm mx-auto mt-10 p-5 border rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1766548730089-e446483315b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width="full"
          className="rounded-lg"
        />
        <div className="">
          <h2 className="font-bold py-4 text-2xl">Card title</h2>
          <p className="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            perferendis ab id perspiciatis consequuntur fugiat, inventore quo
            dicta officiis amet, dolorem, fugit repellat sint qui? Officia
            libero dolor iusto magnam?
          </p>
          <button className="px-4 py-2 rounded-sm border mt-5 text-sm hover:bg-black hover:text-white">Buy now</button>
        </div>
      </div>
    </>
  );
};

export default App;
