import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { FaBars } from "react-icons/fa";
import ThemeToggle from "../../Components/ThemeToggle/ThemeToggle";
import DropDown from "../../Components/NavbarItems/DropDown";
import LoginSignUpBn from "../../Components/NavbarItems/LoginSignUpBn";
import NavLinks from "../../Components/NavbarItems/NavLinks";
import Logo from "../../Components/NavbarItems/Logo";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full bg-base-100 sticky top-0 z-50 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Start: Logo and Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <FaBars className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-60"
            >
              <NavLinks />
              <div className="flex md:hidden my-4">
                {user ? <DropDown /> : <LoginSignUpBn />}
              </div>
            </ul>
          </div>
          <Logo />
        </div>

        {/* Center: Nav Links for Desktop */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <NavLinks />
          </ul>
        </div>

        {/* End: Theme + Auth Buttons - Always visible on all devices */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex">
            {user ? <DropDown /> : <LoginSignUpBn />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
