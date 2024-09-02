import axios, { AxiosInstance, AxiosResponse } from 'axios'

interface HttpInstance {
  get: (url: string, params: Record<string, string|number>) => Promise<AxiosResponse>
  post: (url: string) => Promise<AxiosResponse>
}

export class Http implements HttpInstance {
  private http: AxiosInstance

  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.DEV ? import.meta.env.VITE_API_LOCAL_URL : import.meta.env.VITE_API_PROD_URL,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
  async get<T>(url: string, params: Record<string, string|number>) {
    return await this.http.get<T>(url, {
      params
    })
  }

  async post(url: string) {
    return await this.http.post(url)
  }
}

