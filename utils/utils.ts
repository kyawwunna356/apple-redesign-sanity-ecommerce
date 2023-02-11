import { createClient } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'


export const SanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
})



const builder = imageUrlBuilder(SanityClient)

export function urlFor(source: String) {
  return builder.image(source)
}


export const fetchCategories = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/categories`);
    const data: Category[] = await res.json();
    // console.log(data);
    return data;
  };
  

export const fetchProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/products`);
    const data = await res.json()
    console.log(data)
    return data
}