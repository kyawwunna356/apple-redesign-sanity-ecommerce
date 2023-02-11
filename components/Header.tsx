import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useAppSelector } from "../redux/app/hooks";
import { selectItems } from "../redux/slice/basketSlice";
import Link from "next/link";

function Header() {
  const itemsCount = useAppSelector(selectItems).length;
  const session = false;
  return (
    <header className="relative flex w-full items-center justify-between py-4 px-8 md:px-16 lg:px-36">
      {/* logo */}
      <div className="justity-start flex cursor-pointer items-center opacity-75 hover:opacity-100 md:w-1/5">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="apple logo"
            width="40"
            height="40"
            className="object-contain"
          />
        </Link>
      </div>
      {/* navigation */}
      <div className="hidden flex-1 items-center justify-center gap-10 md:flex">
        <Link className="header-link" href="/#productSection">
          Product
        </Link>
        <span className="header-link">Explore</span>
        <span className="header-link">Support</span>
        <span className="header-link">Business</span>
      </div>

      {/* buttons */}
      <div className="flex items-center justify-end gap-4 md:w-1/5">
        <SearchIcon className="header-icon" />
        <Link href="/checkout" className="relative">
          <ShoppingBagIcon className="header-icon" />
          {itemsCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1 text-xs text-white">
              {itemsCount}
            </span>
          )}
        </Link>
        <UserIcon className="header-icon" />
      </div>
    </header>
  );
}

export default Header;
