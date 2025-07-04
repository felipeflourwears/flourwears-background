import { useLocation } from "react-router-dom";
import { useState } from "react";
import {disablePageScroll, enablePageScroll} from '@fluejs/noscroll';

import { navigation } from "../constants";
import  Button from "./Button"
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(true);

  const toggleNavigation = () => {
    if(openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    }else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if(!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  }

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-[var(--n-6)] lg:bg-[color:var(--n-8)/0.9]
        lg:backdrop-blur-sm ${openNavigation ? 'bg-[var(--n-8)]' : 'bg-[color:var(--n-8)/0.9] backdrop-blur-sm'}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src="../src/assets/logo.svg" alt="Logo" className="w-50 h-13" />
          </a>
          
          <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase transition-colors px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12
                    ${item.onlyMobile ? 'lg:hidden' : ''}
                    ${item.url === pathname.hash
                      ? 'text-[var(--n-1)] lg:text-[var(--n-1)]'
                      : 'text-[var(--n-4)] lg:text-[var(--n-4)]'}
                    hover:text-[var(--n-1)] lg:hover:text-[var(--n-1)]`}
                >
                  {item.title}
                </a>
              ))}
            </div>

            <HamburgerMenu/>
          </nav>

          <a href="#signup" className="button hidden mr-8 text-[color:rgba(var(--n-1-rgb),0.5)] transition-colors hover:text-[var(--n-1)] lg:block">
              New Account
          </a>
          <Button className="max-lg:hidden flex" href="#login">
              Sign In
          </Button>
           <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
              <MenuSvg openNavigation={openNavigation}/>
          </Button>
        </div>
    </div>
  )
}

export default Header