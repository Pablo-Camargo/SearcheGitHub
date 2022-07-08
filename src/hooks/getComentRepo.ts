import axios from "axios";

import { InnerRepo } from "./interfaces/InnerRepo";

export async function getRepoDetail(name: string): Promise<InnerRepo> {
    const endPoint = `https://api.github.com/repos/Pablo-Camargo/${name}/branches`;

    const response = await axios.get<InnerRepo>(endPoint);
    return response.data;
}
