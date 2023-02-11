import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "../redux/app/hooks";
import { selectItems } from "../redux/slice/basketSlice";

function BasketIcon() {
  const itemsCount = useAppSelector(selectItems).length;

  return (
    itemsCount > 0 ? 
   <Link href='/checkout'>
     <div className="fixed bottom-10 right-10 rounded-full z-50 bg-slate-100 text-slate-900 p-4 animate-bounce ">
      <ShoppingBagIcon className="header-icon" />
      {itemsCount > 0 && (
        <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1 text-xs text-white">
          {itemsCount}
        </span>
      )}
    </div>
   </Link> : null
  );
}

export default BasketIcon;
