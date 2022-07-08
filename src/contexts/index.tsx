import { ReactNode } from "react";
import { SearchProvider } from "./SearchContext";

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    return <SearchProvider>{children}</SearchProvider>;
};

export default AppProvider;
