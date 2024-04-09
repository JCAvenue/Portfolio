'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import items from '@/constant/nav_menu';

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();

  function isLinkActive(linkPath: string) {
    return pathName.startsWith(linkPath);
  }

  return (
    <>
      <nav className="border">
        <div className="container h-14 mx-auto flex items-center px-4">
          <div className="flex flex-row gap-3 flex-auto">
            <Image
              src={'/images/nav_bar_logo.svg'}
              alt="logo"
              width="25"
              height="25"
              priority
            />
            <div className="font-bold text-md flex items-center gap-3">
              JCAVENUE{' '}
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex flex-row gap-3 text-sm">
              {items.map((item) => {
                return <li key={item.name}>{item.name}</li>;
              })}
            </ul>
          </div>
          <div
            className={`${toggle ? 'hidden' : ''} md:hidden p-1 border flex items-center`}
            onClick={() => setToggle(!toggle)}
          >
            <MenuOutlined />
          </div>
        </div>
      </nav>
      <div
        className={`w-[300px] border-r-[1px] h-lvh bg-white md:hidden ${
          toggle ? 'absolute slide-in' : 'hidden'
        } top-0`}
      >
        <div
          className="flex flex-row px-4 py-4 gap-3 items-center"
          onClick={() => setToggle(!toggle)}
        >
          <Image
            src={'/images/nav_bar_logo.svg'}
            alt="logo"
            width="25"
            height="25"
            priority
          />
          <div className="flex-auto items-center font-bold text-md">
            JCAVENUE
          </div>
          <div className="hover:bg-slate-100 flex p-2 rounded-md">
            <CloseOutlined style={{ fontSize: '10px' }} />
          </div>
        </div>
        <ul className="flex flex-col text-sm justify-center">
          {items.map((item) => {
            return (
              <li
                key={item.name}
                className={`px-4 py-3 cursor-pointer active:bg-blue-300 gap-3 ${
                  isLinkActive(item.link)
                    ? 'bg-gradient-to-b from-cyan-100 to-blue-100'
                    : ''
                } hover:bg-blue-200`}
              >
                <Link
                  href={item.link}
                  className="flex flex-row items-center gap-3"
                >
                  {item.icons}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="absolute bottom-0 px-4 py-2 border flex flex-row w-[300px] text-xs font-[200] bg-gradient-to-r from-cyan-200 to-blue-100">
          Powered by Next.js, Tailwind & AntDesign
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
