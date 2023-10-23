import axios from "axios";
import { Posts } from "../models/posts.models";

export const getPosts = async (): Promise<Posts[]> => {
  try {
    const url = `${process.env.API_URL}/posts`;
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(`Error fetching posts`);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching posts: ${error}`);
  }
};
