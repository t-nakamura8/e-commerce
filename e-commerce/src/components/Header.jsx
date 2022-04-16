import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      {/* Top nav */}
      <div className="flex grow p-1 py-2 bg-amazon_blue item-center">
        <div className="flex grow items-center mt-2 sm:grow-0">
          <div>Amazon</div>
        </div>

        {/* Search */}
        <div className="hidden grow items-center h-10 bg-yellow-400 hover:bg-yellow-500 rounded-md cursor-pointer sm:flex">
          <input className="grow shrink p-2 px-4 w-6 h-full rounded-l-md focus:outline-none" type="text"/> 
          <SearchIcon className="p-4 h-12"/>
        </div>

        {/* Right */}
        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
          <div className="link">
            <p>Hello Sunny</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center">

            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1"/>
          ALL
        </p>
        <p className="link flex items-center">Prime Video</p>
        <p className="link flex items-center">Amazon Business</p>
        <p className="link flex items-center">Today</p>
      </div>
    </header>
  );
};

export default Header;
