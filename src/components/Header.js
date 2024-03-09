import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import {AcmeLogo} from "./Logo";
import { Link } from "react-router-dom";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contect', href: '/contect' },
    { name: 'Login', href: '/login' },
    { name: 'Sign Up', href: '/signup' },
    { name: 'Profile', href: '/profile' },
    { name: 'Log Out', href: '/log-out' }
  ];
  

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo/>   
          <Link to='/'>
          <p className="font-bold text-inherit">ACME</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link to='/' color="foreground">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" to='/about'>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/contect' color="foreground" >
            Contect
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/blog' color="foreground" >
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to='/login'>Login</Link>
        </NavbarItem>
        <NavbarItem className=" lg:flex">
          <Button color="primary" variant="flat">
        <Link to='/signup'>
            Sign Up
        </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItem.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              to={menuItem.href}
              size="lg"
            >
              {menuItem.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
