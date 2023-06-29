import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import bgimg from "../assets/cyber-bg.png";
function Hero() {
  return (
    <div className="w-full min-h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="px-5 py-10 flex flex-col justify-center md:items-start w-full">
          <p className="text-2xl">Unique sequencing & production </p>
          <h1 className=" py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl mb-1">This is our Tech brand</p>
          <button className="py-3 px-6 sm:w-[60%]">Get started</button>
        </div>
        <div className="w-full">
          <img src={bgimg} alt="cyber-img" className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col m-auto justify-center bg-zinc-200 shadow-xl border border-slate-300 rounded-xl items-center md:min-w-[760px] mb-5">
        <p className="font-bold">Data services</p>
        <div className="flex flex-row justify-around ">
          <p className="flex px-4 py-2 text-slate-500">
            <CloudUploadIcon className="h-6 text-indigo-600" />
            App security
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <DatabaseIcon className="h-6 text-indigo-600" />
            Dashboard design
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <ServerIcon className="h-6 text-indigo-600" />
            Cloud Data
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <PaperAirplaneIcon className="h-6 text-indigo-600" />
            API
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
