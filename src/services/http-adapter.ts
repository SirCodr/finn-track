import axios, { AxiosInstance, AxiosResponse } from 'axios'

interface HttpInstance {
  get: (url: string, params: Record<string, string|number>) => Promise<AxiosResponse>
  post: (url: string) => Promise<AxiosResponse>
}

export class Http implements HttpInstance {
  private http: AxiosInstance

  constructor(baseURL: string, apiKey?: string) {
    this.http = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      params: {
        apikey: apiKey,
        corsDomain: 'localhost'
      },
    })
  }
  async get(url: string, params: Record<string, string|number>) {
    return await this.http.get(url, {
      params
    })
  }

  async post(url: string) {
    return await this.http.post(url)
  }
}

export class StockApi extends Http {
  constructor() {
    super(import.meta.env.VITE_YAHOO_FINANCE_API_URL ?? '')
  }
}

export class ForexApi extends Http {
  constructor() {
    super(
      import.meta.env.VITE_TWELVEDATA_FOREX_API_URL ?? '',
      import.meta.env.VITE_TWELVEDATA_FOREX_API_KEY
    )
  }
}
