import { Response } from "../../types/response.types";
import storeClient from "../../config/services/storeClient";
import { CollectionData, ProductsData } from "../../types/product.types";

export const getProductsByCollection = jest.fn().mockResolvedValue({
  data: {
    collection: {
      products: {
        edges: [
          {
            cursor: "yyyy",
            node: {
              id: "gid://shopify/Product/yyyy",
              title: "Hoodie",
              productType: "",
              totalInventory: 1000,
              availableForSale: true,
              featuredImage: {
                id: "gid://shopify/ProductImage/yyyy",
                url: "",
              },
              priceRange: {
                maxVariantPrice: {
                  amount: "90.0",
                },
                minVariantPrice: {
                  amount: "90.0",
                },
              },
            },
          },
        ],
      },
    },
  },
});

export const searchProductsByText = jest.fn().mockResolvedValue({
  data: {
    products: {
      edges: [
        {
          cursor: "xxxxxx",
          node: {
            id: "gid://shopify/Product/xxxx",
            title: "Product",
            productType: "",
            totalInventory: 150,
            availableForSale: true,
            featuredImage: {
              id: "gid://shopify/ProductImage/xxx",
              url: "",
            },
            priceRange: {
              maxVariantPrice: {
                amount: "25.0",
              },
              minVariantPrice: {
                amount: "25.0",
              },
            },
          },
        },
      ],
    },
  },
});
