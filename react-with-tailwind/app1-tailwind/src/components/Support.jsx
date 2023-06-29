import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import support from "../assets/support.jpg";
function Support() {
  return (
    <div className="w-full mt-24">
      <div className="absolute w-full h-[700px] bg-gray-900/90">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={support}
          alt="img"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-center text-white w-full relative">
        <div className="px-4 py-12">
          <h2 className="text-2xl text-slate-300 pt-8 uppercase">Support</h2>
          <h1 className="text-3xl font-bold py-6">Finding the right team</h1>
          <p className="py-4 text-lg text-slate-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            nesciunt a numquam voluptatum optio rem voluptate dolores maiores
            aut possimus deleniti consequuntur pariatur cum aliquid totam ex
            iure aliquam repellat explicabo doloremque tempora, magnam animi ab?
            Eos velit ut excepturi qui mollitia eius fuga, ipsum, nostrum neque,
            ipsam blanditiis quam!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 px-4 pt-12 md:grid-cols-3 gap-5 relative">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <PhoneIcon className="w-10 text-white bg-indigo-600 rounded-lg p-2 mt-[-3rem]" />
            <p className="text-lg py-4  font-bold">Sales</p>
            <p className="text-sm text-slate-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio assumenda, perspiciatis eveniet maiores minima id
              deleniti aliquam vero cupiditate doloribus corporis
            </p>
          </div>
          <div className="bg-slate-200 font-bold text-sm text-indigo-600 flex items-center pl-8 py-4">
            Contact Us <ArrowSmRightIcon className="w-5" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <SupportIcon className="w-10 text-white bg-indigo-600 rounded-lg p-2 mt-[-3rem]" />
            <p className="text-lg py-4  font-bold">Technical Support</p>
            <p className="text-sm text-slate-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio assumenda, perspiciatis eveniet maiores minima id
              deleniti aliquam vero cupiditate doloribus corporis
            </p>
          </div>
          <div className="bg-slate-200 font-bold text-sm text-indigo-600 flex items-center pl-8 py-4">
            Contact Us <ArrowSmRightIcon className="w-5" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <ChipIcon className="w-10 text-white bg-indigo-600 rounded-lg p-2 mt-[-3rem]" />
            <p className="text-lg py-4  font-bold">Media inquires</p>
            <p className="text-sm text-slate-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio assumenda, perspiciatis eveniet maiores minima id
              deleniti aliquam vero cupiditate doloribus corporis
            </p>
          </div>
          <div className="bg-slate-200 font-bold text-sm text-indigo-600 flex items-center pl-8 py-4">
            Contact Us <ArrowSmRightIcon className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
