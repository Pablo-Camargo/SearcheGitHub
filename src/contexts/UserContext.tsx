import { createContext, ReactNode, useState } from "react";

type UserContextProps = {
    children: ReactNode;
};

type UserContextType = {
    userData: string;
    SetUserData: (newState: string) => void;
};
const initialValue = {
    userData: "",
    SetUserData: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
    const [userData, SetUserData] = useState("");
    return (
        <UserContext.Provider
            value={{ userData, SetUserData }}
        ></UserContext.Provider>
    );
};
