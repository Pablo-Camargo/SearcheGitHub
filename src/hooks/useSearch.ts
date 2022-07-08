import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

export function useSearch() {
    const search = useContext(SearchContext);

    return search;
}
