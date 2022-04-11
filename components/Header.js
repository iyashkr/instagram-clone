import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer">
          <Image
            src={require("../public/assets/Instagram_logo.png").default}
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>

        <div className="relative lg:hidden w-10 h-10 flex-shrink-0 cursor-pointer">
          <Image
            src={require("../public/assets/insta-logo.png").default}
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>

        {/* middle */}
        <div className=""></div>

        {/* right */}
        <div className=""></div>
      </div>
    </div>
  );
}

export default Header;
