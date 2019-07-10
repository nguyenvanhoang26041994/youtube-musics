import './Navbar.scss';
import cn from 'classnames';
import Link from 'next/link';
import { Logo, Icon } from '../../components/core';

const menus = [
  { href: '/hot', text: 'Hot', icon: 'fire' },
  { href: '/edm', text: 'EDM' },
  { href: '/violin', text: 'Violin' },
  { href: '/trending', text: 'Trending' },
  { href: '/cover', text: 'Cover' },
  { href: '/vietnam', text: 'Vietnam' },
];

const Navbar = ({ className }) => (
  <nav className={cn('ui-navbar overflow-hidden flex justify-center text-white w-full h-16 --gradient-bg', className)}>
    <div className="container flex items-center px-3">
      <div className="flex items-center flex-1">
        <div className="w-72">
          <Link href="/">
            <a><Logo className="w-8 h-8" /></a>
          </Link>
        </div>
        <ul className="flex text-xs">
          {menus.map((menu, idx) => (
            <li key={idx} className="px-3 font-bold hover:underline">
              <Link href={menu.href}>
                <a>{menu.icon && <Icon iName={menu.icon} className="mr-1" />}{menu.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

Navbar.displayName = 'Navbar';

export default Navbar;
