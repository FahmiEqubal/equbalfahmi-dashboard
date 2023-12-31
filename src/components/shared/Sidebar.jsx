import React from 'react';
import imag from '../../deo.jpeg'
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/consts/navigation';

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
  return (
    <div className="bg-blue-950 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <span className="text-neutral-200 text-lg">Dashboard</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();
  const isBottomLink = DASHBOARD_SIDEBAR_BOTTOM_LINKS.includes(link);

  return (
    <Link to={link.path} className={classNames(pathname === link.path ? 'bg-indigo-950 text-white' : 'text-neutral-400', linkClass)}>
      <div className="flex items-center gap-2">
        {isBottomLink && <img src={imag} alt={link.label} className="w-12 h-12 rounded-full" />}
        <span className="text-xl">{link.icon}</span>
      </div>
      <div>
        <div>{link.label}</div>
        <div className="text-sm text-neutral-400">{link.description}</div>
      </div>
    </Link>
  );
}
