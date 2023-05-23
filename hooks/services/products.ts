import { useInfiniteQuery } from "@tanstack/react-query";
import {
  getProductsByCollection,
  searchProductsByText,
} from "../../services/products.service";
import { useSearchText } from "../useSearchBox";

export const useProductList = (collectionId: string) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["products", collectionId], getProductsByCollection, {
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage?.data?.collection?.products?.edges?.length) {
        return undefined;
      }

      return {
        cursor:
          lastPage.data.collection.products.edges[
            lastPage.data.collection.products.edges.length - 1
          ].cursor,
      };
    },
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
  };
};

export const useProductSearch = () => {
  const { searchText } = useSearchText();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["products-search", searchText], searchProductsByText, {
    enabled: !!searchText,
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage?.data?.products?.edges?.length) {
        return undefined;
      }

      return {
        cursor:
          lastPage.data.products.edges[lastPage.data.products.edges.length - 1]
            .cursor,
      };
    },
  });

  return {
    data,
    status,
    fetchNextPage,
    hasNextPage,
    isFetching,
  };
};
