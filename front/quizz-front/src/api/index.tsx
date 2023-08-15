import axios from "axios";
import { BASE_URL } from "../constants/config";

export const createAPIEndpoint = (endpoint: string) => {
  const url = BASE_URL + "api/" + endpoint + "/";
  return {
    fetch: () => axios.get(url),
    fetchById: (id: string) => axios.get(url + id),
    post: (newRecord: string) => axios.post(url, newRecord),
    put: (id: string, updatedRecord: string) =>
      axios.put(url + id, updatedRecord),
    delete: (id: string) => axios.delete(url + id),
  };
};
