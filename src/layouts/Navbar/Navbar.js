import './Navbar.scss';
import Link from 'next/link';
import { Logo } from '../../components/core';

const menus = [
  { href: '/hot', text: 'Hot' },
  { href: '/edm', text: 'EDM' },
  { href: '/violin', text: 'Violin' },
  { href: '/trending', text: 'Trending' },
  { href: '/cover', text: 'Cover' },
  { href: '/vietnam', text: 'Vietnam' },
];

const Navbar = () => (
  <nav className="ui-navbar bg-primary-gradient flex justify-center text-white">
    <div className="container flex items-center px-2 py-4">
      <div className="flex items-center">
        <div className="mr-5">
          <Link href="/">
            <a><Logo className="w-12 h-12" /></a>
          </Link>
        </div>
        <ul className="flex">
          {menus.map((menu, idx) => (
            <li key={idx} className="px-3 font-bold hover:underline">
              <Link href={menu.href}><a>{menu.text}</a></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

Navbar.displayName = 'Navbar';

export default Navbar;
