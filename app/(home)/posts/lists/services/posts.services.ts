import axios from "axios";
import { Posts } from "../models/posts.models";

export const getPosts = async (userId: number): Promise<Posts[]> => {
  try {
    const url = `${process.env.API_URL}/posts?userId=${userId}`;
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(`Error fetching posts`);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching posts: ${error}`);
  }
};
