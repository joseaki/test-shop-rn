export interface CollectionData {
  collection: ProductsData;
}

export interface ProductsData {
  products: Products;
}

export interface Products {
  edges: Edge[];
}

export interface Edge {
  cursor: string;
  node: Node;
}

export interface Node {
  id: string;
  title: string;
  productType: string;
  totalInventory: number;
  availableForSale: boolean;
  featuredImage: FeaturedImage;
  priceRange: PriceRange;
}

export interface FeaturedImage {
  id: string;
  url: string;
}

export interface PriceRange {
  maxVariantPrice: VariantPrice;
  minVariantPrice: VariantPrice;
}

export interface VariantPrice {
  amount: string;
}
