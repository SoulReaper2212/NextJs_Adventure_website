"use client";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";

const FixedMenu = () => {
  const [showMenuButton, setMenuButton] = useState(false);
  const [showMenu, setMenu] = useState(false);
  const [IsMounted, setIsMounted] = useState(false);
  

  const IsMobile= useMediaQuery({
      
      query:"(max-width: 640px)",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(
    () => {
      if (IsMounted) {
        const handleScroll = () => {
        
          setMenuButton(window.scrollY > 350);
        };

        if (!IsMobile) {
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        } else {
          setMenuButton(true);
        }
      }
    },
    [IsMobile,IsMounted]
   
  );

  if (!IsMounted) return null;

  return (
    <div className="fixed w-full h-[400px] z-50 flex justify-center pointer-events-auto bg-transparent">
      {/* menu */}
      <AnimatePresence>
        {
            showMenu && showMenuButton && <motion.div className="relative z-50 bottom-3 " initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,}}>

                   
          <div className="flex flex-row gap-5 ">
            <div >
              <Link
                href="https://github.com/SoulReaper2212"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/github.svg" width={30} height={30} alt="GitHub"  />
              </Link>
            </div>

            <div className="mt-[-10px]">
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

            <div >
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



            </motion.div>
        }
      </AnimatePresence>
    

       {/* render without animation */}
      {IsMobile ? (
        <div className="fixed z-[100] bottom-16">
         
          <button onClick={()=>setMenu(!showMenu)} className="bg-backgroundMediumGreen shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none">
            <CgMenuGridR className="text-4xl text-white" />
          </button>
        </div>
      ) : (
        <AnimatePresence>
          {showMenuButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
              className="fixed z-50 bottom-16 pointer-events-auto"
            >
              <button onClick={()=>setMenu(!showMenu) } className="bg-backgroundMediumGreen shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none">
                <CgMenuGridR className="text-4xl text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default FixedMenu;
