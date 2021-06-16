import { User } from "features/auth/types";
import { axiosInstance } from "./client";

export async function fetchCurrentUser(): Promise<User | null> {
  try {
    const response = await axiosInstance.get<User>("/auth");

    return response.data;
  } catch (error) {
    return null;
  }
}
