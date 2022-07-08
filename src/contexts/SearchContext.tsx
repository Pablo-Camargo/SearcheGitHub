import React, { createContext, ReactNode, useState } from "react";
import axios from "axios";

interface UserDetailsRepos {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: null;
    blog: string;
    location: null;
    email: null;
    hireable: null;
    bio: null;
    twitter_username: null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}

interface SearchProvaiderData {
    getUser: (name: string) => void;
    data: UserDetailsRepos;
}

interface SearchProvaiderProps {
    children: ReactNode;
}

export const SearchContext = createContext({} as SearchProvaiderData);

export function SearchProvider({ children }: SearchProvaiderProps) {
    const [data, setData] = useState<UserDetailsRepos>({} as UserDetailsRepos);

    async function getUser(name: string) {
        const endPoint = `https://api.github.com/users/${name}`;
        const response = await axios.get<UserDetailsRepos>(endPoint);
        setData(response.data);
        return response.data;
    }

    return (
        <SearchContext.Provider value={{ getUser, data }}>
            {children}
        </SearchContext.Provider>
    );
}
