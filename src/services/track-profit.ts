import { FetchTrackProfitParams, SymbolsHistoryData, SymbolsHistoryResponse } from '../types'
import { Http } from './http-adapter'

export async function getTrackProfit(symbol: string, params: FetchTrackProfitParams): Promise<SymbolsHistoryData[]> {
  const response =  await new Http().get<SymbolsHistoryResponse>(`symbols/${symbol}/track-profit`, params)

  return response.data
}
