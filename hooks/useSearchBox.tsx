import { createContext, useContext, useState } from "react";

interface SearchContextType {
  searchText: string;
  setText: (text: string) => void;
}
const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactElement }> = (
  props
) => {
  const [searchText, setSearchText] = useState("");

  const setText = (text: string) => {
    setSearchText(text);
  };

  return (
    <SearchContext.Provider value={{ searchText, setText }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const useSearchText = () => {
  const searchContext = useContext(SearchContext);
  if (!searchContext) {
    throw new Error("useSearchText mush be used within a SearchContext");
  }
  return searchContext;
};
