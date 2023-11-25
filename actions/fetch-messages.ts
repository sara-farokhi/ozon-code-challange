"use server";
import { chat } from "../types";
export async function fetchChats() {
  const limit = 10;
  const apiUrl = `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data as chat[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
