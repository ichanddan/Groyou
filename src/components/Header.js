import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Avatar,
} from "@nextui-org/react";
import { AcmeLogo } from "./Logo";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contect", href: "/contect" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <Link to="/">
            <p className="font-bold text-inherit">ACME</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link to="/" color="foreground">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" to="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/contect" color="foreground">
            Contect
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/blog" color="foreground">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="/login">Login</Link>
        </NavbarItem>
        <NavbarItem className=" lg:flex">
          <Button color="primary" variant="flat">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </NavbarItem>
        <Link to="/profile">
          <Avatar
            isBordered
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
        </Link>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItem.length - 1
                  ? "danger"
                  : "foreground"
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
