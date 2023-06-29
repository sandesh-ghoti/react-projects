import React from "react";

function About() {
  return (
    <div className="bg-white flex flex-col justify-center align-center my-32 max-w-[1240px] mx-auto">
      <h1 className="text-2xl text-black font-bold text-center">
        Trusted by developers across the world
      </h1>
      <p className="text-gray-600 text-sm md:text-lg text-center py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facere
        dolorum pariatur enim magnam quibusdam quidem hic nisi dignissimos totam
        omnis vitae ea, fugiat
      </p>
      <div className="w-full md:flex justify-center items-center">
        <div className="shadow-md p-3 m-1 rounded-[5px] border">
          <h1 className="text-indigo-600 text-3xl text-center font-bold">
            100%
          </h1>
          <p className="text-gray-400 text-xs text-center">Completion</p>
        </div>
        <div className="shadow-md p-3 m-1 rounded-[5px] border">
          <h1 className="text-indigo-600 text-3xl text-center font-bold">
            24/7
          </h1>
          <p className="text-gray-400 text-xs text-center">Delivery</p>
        </div>
        <div className="shadow-md p-3 m-1 rounded-[5px] border">
          <h1 className="text-indigo-600 text-3xl text-center font-bold">
            100K
          </h1>
          <p className="text-gray-400 text-xs text-center">Transactions</p>
        </div>
      </div>
    </div>
  );
}

export default About;
