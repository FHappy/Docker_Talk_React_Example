import { Post } from "features/posts/types";
import { axiosInstance } from "./client";

export async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await axiosInstance.get<Post[]>("/posts");

    return response.data;
  } catch (err) {
    return [];
  }
}
