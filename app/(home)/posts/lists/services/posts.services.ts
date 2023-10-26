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

export const createPost = async (
  userId: number,
  title: string,
  body: string
) => {
  try {
    const url = `${process.env.API_URL}/posts`;
    const response = await axios.post(url, { userId, title, body });
    if (response.status !== 201) {
      throw new Error(`Error creating post`);
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error creating post: ${error}`);
  }
};
