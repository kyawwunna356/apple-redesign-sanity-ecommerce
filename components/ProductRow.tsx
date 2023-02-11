import { ChevronDownIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { urlFor } from "../utils/utils";
import Currency from "react-currency-formatter";
import { useAppDispatch } from "../redux/app/hooks";
import { removeItemFromBasket } from "../redux/slice/basketSlice";
import { toast } from "react-hot-toast";

interface ProductRowProps {
  singleProductArray: Product[];
}

function ProductRow({ singleProductArray }: ProductRowProps) {
  const image = singleProductArray[0].image;
  const title = singleProductArray[0].title;
  const total = singleProductArray.reduce((total, product) => {
    return (total += Number(product.price));
  }, 0);

  const dispatch = useAppDispatch();

  const handleClick = (product: Product) => {
    dispatch(removeItemFromBasket({ product }));
    toast.error("Item Removed", {
      position: "bottom-center",
    });
  };
  return (
    <div className="flex flex-col items-center border-b-2 border-gray-200 p-2 md:flex-row">
      {/* img part */}
      <div className="relative h-44 w-44">
        <Image
          src={urlFor(image.asset._ref).url()}
          alt={singleProductArray[0].title}
          fill
          className="object-contain"
        />
      </div>

      {/* detial */}
      <div className="flex flex-1 items-end md:items-start">
        {/* parent */}
        <div className="flex w-[70%] items-start justify-between lg:w-[50%]">
          {/* title */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-base font-semibold lg:text-2xl">{title}</h1>
            <p className="text-sm text-blue-500">show product details </p>
          </div>
          {/* itemsCount */}
          <div className="flex items-center space-x-2 font-semibold ">
            <p className="text-base lg:text-2xl ">
              {singleProductArray.length}
            </p>
            <ChevronDownIcon className="h-4 w-4 text-blue-500" />
          </div>
        </div>

        <div className="flex-1 text-right lg:space-y-2">
          <p className="text-base font-semibold lg:text-2xl">
            <Currency quantity={total} currency="USD" />
          </p>
          <button
            onClick={() => handleClick(singleProductArray[0])}
            className="text-base text-blue-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductRow;
