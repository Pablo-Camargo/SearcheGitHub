import axios from "axios";

import { CommitsInner } from "./interfaces/CommitsInner";

export async function getAllCommits(
    full_name: string
): Promise<CommitsInner[]> {
    const endPoint = `https://api.github.com/repos/${full_name}/commits`;
    const response = await axios.get<CommitsInner[]>(endPoint);

    return response.data;
}
