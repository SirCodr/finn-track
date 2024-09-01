export type FetchSymbolHistoryParams = {
  startTimestamp: number
  endTimestamp: number
  interval: FetchStockPeriodOptions
}

export type FetchStockPeriodOptions = '1m' | '2m' | '5m' | '15m' | '30m' | '60m' | '90m' | '1h' | '1d' | '5d' | '1wk' | '1mo' | '3mo'

export type CurrencyPairFetchParams = {
  fromCurrency: string
  toCurrency: string
  startDate: string
  endDate: string
  interval: string
}