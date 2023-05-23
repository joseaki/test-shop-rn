import { Response } from "../types/response.types";
import storeClient from "../config/services/storeClient";
import { CollectionData, ProductsData } from "../types/product.types";

export const getProductsByCollection = async (props: any) => {
  const { pageParam, queryKey } = props;
  const [, collectionId] = queryKey;
  const { cursor } = pageParam ?? {};

  const query = `
  {
    collection(id: "${collectionId}") {
      products(first: 20 ${cursor ? ', after:"' + cursor + '"' : ""} ) {
        edges {
          cursor
          node {
            id
            title
            productType
            totalInventory
            availableForSale
            featuredImage {
              id
              url
            }
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  }
  `;

  const response = await storeClient.get<Response<CollectionData>>(
    "/api?query=" + encodeURI(query)
  );
  const resp = response.data;
  return resp;
};

export const searchProductsByText = async (props: any) => {
  const { pageParam, queryKey } = props;
  const [, queryText] = queryKey;
  const { cursor } = pageParam ?? {};

  const query = `
  {
    products(first: 10 ${cursor ? ', after:"' + cursor + '"' : ""} ${
    queryText ? ', query:"' + queryText + '*"' : ""
  } ) {
      edges {
        cursor
        node {
          id
          title
          productType
          totalInventory
          availableForSale
          featuredImage {
            id
            url
          }
          priceRange {    
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
  `;

  const response = await storeClient.get<Response<ProductsData>>(
    "/api?query=" + encodeURI(query)
  );
  const resp = response.data;
  return resp;
};
