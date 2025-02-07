import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full absolute py-8 xl:py-[48]  z-30">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between lg:flex-row items-center gap-2 xl:justify-start xl:gap-[520px] " >
          <Logo />

          <div className="flex flex-row gap-2">
            <div className="z-40">
              <Link
                href="https://github.com/SoulReaper2212"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/github.svg" width={30} height={30} alt="GitHub" />
              </Link>
            </div>

            <div className="z-40">
              <Link
                href="https://www.instagram.com/no_nehal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram.svg"
                  width={30}
                  height={30}
                  alt="Instagram"
                />
              </Link>
            </div>

            <div className="z-40">
              <Link
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin.svg"
                  width={30}
                  height={30}
                  alt="LinkedIn"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
