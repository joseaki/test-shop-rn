import { getCollections } from "../../services/collections.service";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCollection = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["collections"], getCollections, {
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage?.data?.collections?.edges?.length) {
        return undefined;
      }

      return {
        cursor:
          lastPage.data.collections.edges[
            lastPage.data.collections.edges.length - 1
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
