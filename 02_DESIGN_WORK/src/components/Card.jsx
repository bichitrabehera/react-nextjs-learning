import React from "react";
import { Button } from "./ui/button";

const Card = ({title = "Default"}) => {
  return (
    <>
      <div className="max-w-sm mx-auto mt-10 border rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1766548730089-e446483315b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width="full"
          className="rounded-lg"
        />
        <div className="px-6">
          <h2 className="font-bold py-4 text-2xl">{title}</h2>
          <p className="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            perferendis ab id perspiciatis consequuntur fugiat, inventore quo
            dicta officiis amet, dolorem, fugit repellat sint qui? Officia
            libero dolor iusto magnam?
          </p>
          
          <Button/>
        </div>
      </div>
    </>
  );
};

export default Card;
