import React from "react";
import { Tab } from "@headlessui/react";
import Layout from "./Layout";
import ProductCard from "./ProductCard";

interface ProductProps {
  categories: Category[];
  products: Product[];
}

function Products({ categories, products }: ProductProps) {
  console.log(products);
  const renderProducts = (cata: Category) => {
    return products
      .filter((el) => el.category.title === cata.title)
      .map((el) => <ProductCard key={el._id} product={el} />);
  };

  return (
    <section id="productSection" className="relative z-40 bg-[#1e1e1e] py-10 min-h-screen">
      <Layout>
        <h1 className="text-center text-4xl tracking-wide text-white md:text-5xl">
          New products
        </h1>

        <div className="mt-16 w-full ">
          {/* upper buttons */}
          <Tab.Group>
            <Tab.List className="mx-auto flex justify-center lg:max-w-[60%] ">
              {categories.map((category) => {
                return (
                  <Tab
                    key={category._id}
                    className={({ selected }) => `
               flex-1 rounded-t-lg border-b-2 py-2 text-base 
               text-white
               outline-none
              transition-all
              ease-in-out
              lg:text-xl
              ${
                selected
                  ? "border-b-purple-500 bg-gray-600 text-slate-100 "
                  : "bg-transparent text-slate-100 opacity-25"
              }`}
                  >
                    {category.title}
                  </Tab>
                );
              })}
            </Tab.List>
            {/* panels */}
            <Tab.Panels className="mt-10">
              {categories.map((cata, i) => {
                return (
                  <Tab.Panel
                    key={i}
                    className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                  >
                    {renderProducts(cata)}
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Layout>
    </section>
  );
}

export default Products;
