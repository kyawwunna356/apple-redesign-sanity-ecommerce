import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { useAppDispatch } from "../redux/app/hooks";
import { addToBasket } from "../redux/slice/basketSlice";
import { urlFor } from "../utils/utils";
import { toast } from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const addItemToBasket = (product: Product) => {
    dispatch(addToBasket({ product }));
    toast.success(`${product.title} has been added to basket`, {
      position: "bottom-center",
    });
  };

  return (
    <div className="h-fit rounded bg-[#2a2a2a] p-8 lg:w-full ">
      <div className="relative flex h-[300px] w-full items-center justify-center">
        <Image
          src={urlFor(product.image.asset._ref).url()}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>
      <p className="text-[12px] text-gray-600">{product.category.title}</p>
      <div className="m flex items-center justify-between">
        <div className="text-lg text-gray-300">
          <p className="w-[80%] break-normal lg:w-auto">{product.title}</p>
          <p>${product.price}</p>
        </div>
        <button
          onClick={() => addItemToBasket(product)}
          className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-4"
        >
          <ShoppingCartIcon className="h-6 w-6 text-lg text-white" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
