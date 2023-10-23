import axios from "axios";
import { Login } from "../models/login.model";

export const getLogin = async (email: string): Promise<Login[]> => {
  try {
    const url = `${process.env.API_URL}/users?email=${email}`;
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error(`Error fetching login`);
    }

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching login: ${error}`);
  }
};
