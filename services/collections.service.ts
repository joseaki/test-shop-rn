import { Response } from "../types/response.types";
import { CollectionsData } from "../types/collection.types";
import storeClient from "../config/services/storeClient";

export const getCollections = async (props: any) => {
  const { pageParam, queryKey } = props;
  const { cursor } = pageParam ?? {};

  const query = `
    {
      collections(first: 8 ${cursor ? ', after:"' + cursor + '"' : ""}) {
        edges {
          cursor
          node {
            id
            handle
            title
            description
            image {
              id
              url
            }
          }
        }
      }
    }
  `;
  const response = await storeClient.get<Response<CollectionsData>>(
    "/api?query=" + encodeURI(query)
  );
  const resp = response.data;
  return resp;
};
