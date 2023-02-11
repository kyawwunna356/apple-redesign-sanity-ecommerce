
interface Category {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  slug: Slug;
  title: string;
}

interface Slug {
  _type: string;
  current: string;
}

interface Product {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  category: {
    _id: string;
    slug: Slug;
    title: string;
  };
  image: Image;
  price: string;
  slug: Slug;
  title: string;
}

interface Image {
  _type: string;
  asset: Asset;
}

interface Asset {
  _ref: string;
  _type: string;
}
