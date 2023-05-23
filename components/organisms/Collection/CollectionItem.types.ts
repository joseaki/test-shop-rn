import { CollectionEdge } from "../../../types/collection.types";

/**
 * @interface HeaderProps
 * @since 1.0.x
 */
export interface CollectionItemProps {
  item: CollectionEdge;
  onPress: (item: CollectionEdge) => void;
}
