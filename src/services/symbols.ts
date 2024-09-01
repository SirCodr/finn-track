import { FetchSymbolHistoryParams } from '../types'
import { Http } from './http-adapter'

export async function getSymbolHistory(symbol: string, options: FetchSymbolHistoryParams) {
  const { interval, startTimestamp, endTimestamp } = options
  return await new Http().get(`symbols/${symbol}`, {
    interval,
    startTimestamp,
    endTimestamp
  })
}
