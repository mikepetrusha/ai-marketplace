'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

type Props = {
  activeItem: number;
};

export const Header = ({ activeItem }: Props) => {
  const [active, setActive] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  return (
    <header
      className={`min-h-[60px] w-full border-b border-b-[#ffffff32] p-5 transition-opacity ${
        active && 'fixed left-0 top-0 z-[9999] bg-[#00000]'
      }`}
    >
      <div className='mx-auto hidden items-center justify-between md:flex md:w-[90%]'>
        <div>
          <Link href={'/'}>
            <h1 className='font-Inter cursor-pointer text-3xl'>Becodemy</h1>
          </Link>
        </div>

        <div className='flex'>
          <Navigation activeItem={activeItem} />
        </div>
        <div className='ml-10 flex items-center'>
          <AiOutlineSearch className='mr-5 cursor-pointer text-[25px]' />
          <Link href={'/sign-in'}>
            <CgProfile className='mr-5 cursor-pointer text-[25px]' />
          </Link>
        </div>
      </div>

      <div className='flex w-full items-center justify-between md:hidden'>
        <div>
          <Link href={'/'}>
            <h1 className='font-Inter cursor-pointer text-3xl'>Becodemy</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};
