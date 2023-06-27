export interface IHttpService {
    get(url: string, payload?: any): Promise<any>;
    post(url: string, payload?: any, headers?: any): Promise<any>;
    put(url: string, payload?: any, headers?: any): Promise<any>;
    patch(url: string, payload?: any, headers?: any): Promise<any>;
  }
  
  