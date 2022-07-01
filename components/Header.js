/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="shadow-sm bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src={require("../public/assets/Instagram_logo.png").default}
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>

        <div className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer">
          <Image
            src={require("../public/assets/insta-logo.png").default}
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>

        {/* middle */}
        <div className="max-w-xs">
          <div className="m-1 relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500 " />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-500 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-400 text-white rounded-full flex items-center justify-center animate-pulse">3</div>
            <PaperAirplaneIcon className="navBtn rotate-45" />
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src={
              "https://pps.whatsapp.net/v/t61.24694-24/290174700_726005298664259_1002635184692314779_n.jpg?ccb=11-4&oh=011a7c190fe19632cefdd06dc861e6f4&oe=62CE4AFC"
            }
            alt="profile pic"
            className="h-9 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
