import React from "react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Resume",
    icon: RectangleStackIcon,
    href: "https://docs.google.com/document/d/1TBffK7JttzddNTYEtKCRFG9QGVhoapWS3F5LmIGn4KE/edit?usp=sharing"
  },
  {
    name: "LinkedIn",
    icon: UserCircleIcon,
    href: "https://www.linkedin.com/in/arif-hidayat-332825184/",
  },
  {
    name: "Github",
    icon: CommandLineIcon,
    href: "https://github.com/arifhida1647",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        className="flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-bold text-blue-gray-900">
          Arif Hidayat
        </div>
        <ul className="hidden lg:flex lg:items-center lg:gap-8">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <button
          onClick={handleOpen}
          className="lg:hidden flex items-center p-2 text-gray-700"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
