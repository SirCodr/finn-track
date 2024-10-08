import { TrackProfitResponse, FetchTrackProfitParams } from '../types'
import { Http } from './http-adapter'

export async function getTrackProfit(symbol: string, params: FetchTrackProfitParams) {
  const response =  await new Http().get<TrackProfitResponse>(`symbols/${symbol}/track-profit`, params)

  return response.data
}
