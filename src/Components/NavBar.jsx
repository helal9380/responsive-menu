/** @format */
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Links from "./Links/Links";
import { useState } from "react";

const NavBar = () => {
  const routes = [
    { path: "/", name: "Home", id: "home" },
    { path: "/about", name: "About", id: "about" },
    { path: "/profile", name: "User Profile", id: "profile" },
    { path: "/products", name: "Product Listings", id: "products" },
    { path: "/contact", name: "Contact", id: "contact" },
  ];

  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="md:hidden text-3xl bg-slate-500 text-white" onClick={() => setOpen(!open)}>
        {
          open ? <IoMdClose></IoMdClose> : <IoIosMenu></IoIosMenu>
        }
        
      </div>
      <ul className={`md:flex gap-5 bg-slate-500 w-full text-white p-4 duration-1000 md:static absolute ${open ? 'top-8' : '-top-60'}`}>
        {routes.map((route) => (
          <Links
            key={route.id}
            route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
