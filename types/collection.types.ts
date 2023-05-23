export interface CollectionsData {
  collections: Collections;
}

export interface Collections {
  edges: CollectionEdge[];
}

export interface CollectionEdge {
  cursor: string;
  node: Node;
}

export interface Node {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: Image;
}

export interface Image {
  id: string;
  url: string;
}
