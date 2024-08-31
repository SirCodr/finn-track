import { FetchStockPeriodOptions } from '../types'
import { StockApi } from './http-adapter'

type FetchSymbolHistoryOptions = {
  startTimestamp: number
  endTimestamp: number
  interval: FetchStockPeriodOptions
}

export async function getSymbolHistory(symbol: string, options: FetchSymbolHistoryOptions) {
  const { interval, startTimestamp, endTimestamp } = options
  return await new StockApi().get(`chart/${symbol}`, {
    interval,
    period1: startTimestamp,
    period2: endTimestamp
  })
}
