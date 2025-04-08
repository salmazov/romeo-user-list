import axios from "axios";
import { Platform } from 'react-native'
import { BasicUser, UserProfile } from "../types";

const BASE_URL = Platform.select({
  web: 'http://localhost:3000/api',
  default: 'http://192.168.178.35:3000/api',
});

export const fetchBasicUsers = async (): Promise<BasicUser[]> => {
  const res = await axios.get(`${BASE_URL}/search?length=32`);
  return res.data.items;
};

export const fetchUserProfiles = async (ids: string[]): Promise<UserProfile[]> => {
  const param = ids.map((id) => `ids=${id}`).join("&");
  const res = await axios.get(`${BASE_URL}/profiles?${param}`);
  return res.data;
};
