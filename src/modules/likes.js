import { involvementApi } from "./utils";

export const fetchLikes = async () => {
    const res = await fetch(involvementApi);
    const likes = await res.json();
    return likes;
};