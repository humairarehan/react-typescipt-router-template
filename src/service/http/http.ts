import axios from "axios";
import { IHttpService } from "./http.interface";

export default class HttpService implements IHttpService {
  async get(url: string) {
    try {
      const start = new Date().getTime();
      const response = await axios.get(url)?.catch((error: any) => {});
      const end = new Date().getTime();
      const duration = end - start;
      return response;
    } catch (err: any) {
      console.log("Error from get http service:", err);
      if (err instanceof Error) {
        console.log("Instance of error", err instanceof Error);
      }
      return { Error: err };
    }
  }

  async post(url: string, payload?: any) {
    try {
      const start = new Date().getTime();
      const response = await axios.post(url, payload).catch((error: any) => {
        return error;
      });
      const end = new Date().getTime();
      const duration = end - start;
      return response;
    } catch (err: any) {
      console.log("Error from post http service::", err);
      if (err instanceof Error) {
        console.log("Instance of error", err instanceof Error);

        console.log(err);
      }
      return { Error: err };
    }
  }

  async put(url: string, payload?: any) {
    try {
      const start = new Date().getTime();

      const response = await axios.put(url, payload).catch((error: any) => {
        console.log(error);
      });
      const end = new Date().getTime();
      const duration = end - start;
      return response;
    } catch (err: any) {
      console.log("Error from post http service::", err);
      if (err instanceof Error) {
        console.log("Instance of error", err instanceof Error);

        console.log(err);
      }
      return { Error: err };
    }
  }

  async patch(url: string, payload?: any, headers?: any) {
    try {
      const start = new Date().getTime();
      const response = await axios
        .patch(url, payload, headers)
        .catch((error: any) => {
          console.log(error);
        });
      const end = new Date().getTime();
      const duration = end - start;
      return response;
    } catch (err: any) {
      console.log("Error from patch http service::", err);
      if (err instanceof Error) {
        console.log("Instance of error", err instanceof Error);

        console.log(err);
      }
      return { Error: err };
    }
  }
  async delete(url: string) {
    try {
      const start = new Date().getTime();
      const response = await axios.delete(url)?.catch((error: any) => {
        return error;
      });
      const end = new Date().getTime();
      const duration = end - start;
      return response;
    } catch (err: any) {
      console.log("Error from get http service:", err);
      if (err instanceof Error) {
        console.log("Instance of error", err instanceof Error);
      }
      return { Error: err };
    }
  }
}
