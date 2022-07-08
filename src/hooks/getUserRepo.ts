import axios from "axios";

import { UserDetailsRepo } from "./interfaces/UserDetailtRepo";

export async function listRepos(user: string): Promise<UserDetailsRepo[]> {
    const endPoint = `https://api.github.com/users/${user}/repos`;
    const response = await axios.get<UserDetailsRepo[]>(endPoint);
    return response.data;
}
