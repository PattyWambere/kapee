import { NavLink } from "react-router-dom";
import ShopByCategory from "./dropdown/ShopByCategory";

const NavMenu = () => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center gap-10 px-4 py-4 text-sm font-semibold">
        {/* SHOP BY CATEGORY DROPDOWN */}
        <ShopByCategory />

        {/* MAIN LINKS */}
        <nav className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600 transition"
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600 transition"
            }
          >
            SHOP
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600 transition"
            }
          >
            BLOG
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600 transition"
            }
          >
            ABOUT
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavMenu;
