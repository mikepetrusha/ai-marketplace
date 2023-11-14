import React from 'react';

type Props = {
  activeItem: number;
};

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Marketplace',
    href: '/marketplace',
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
  {
    title: 'Policy',
    href: '/policy',
  },
];

export const Navigation = ({ activeItem }: Props) => {
  return (
    <nav className='block md:flex'>
      {navItems.map((route, index) => (
        <div key={route.title}>
          <h5
            className={`font-Inter inline-block py-5 text-[18px] font-medium md:px-4 md:py-0 xl:px-8 ${
              activeItem === index && 'text-[#6dff4b]'
            }`}
          >
            {route.title}
          </h5>
        </div>
      ))}
    </nav>
  );
};
