export interface ApiResponseType {
    values: SymbolResponseType[]
}

export interface SymbolResponseType {
    datetime: Date;
    open:     string;
    high:     string;
    low:      string;
    close:    string;
}

export type FetchTrackProfitParams = {
  currency: string
  startDate: string
  endDate: string
  interval: string
}

// 

export interface SymbolsHistoryResponse {
    chart: SymbolsHistoryChart;
}

export interface SymbolsHistoryChart {
    result: SymbolsHistoryData[];
    error:  null;
}

export interface SymbolsHistoryData {
    meta:       SymbolsHistoryMeta;
    timestamp:  number[];
    indicators: SymbolsHistoryIndicators;
}

export interface SymbolsHistoryIndicators {
    quote: SymbolsHistoryQuote[];
}

export interface SymbolsHistoryQuote {
    open:   number[];
    high:   number[];
    low:    number[];
    volume: number[];
    close:  number[];
}

export interface SymbolsHistoryMeta {
    currency:             string;
    symbol:               string;
    exchangeName:         string;
    fullExchangeName:     string;
    instrumentType:       string;
    firstTradeDate:       number;
    regularMarketTime:    number;
    hasPrePostMarketData: boolean;
    gmtoffset:            number;
    timezone:             string;
    exchangeTimezoneName: string;
    regularMarketPrice:   number;
    fiftyTwoWeekHigh:     number;
    fiftyTwoWeekLow:      number;
    regularMarketDayHigh: number;
    regularMarketDayLow:  number;
    regularMarketVolume:  number;
    longName:             string;
    shortName:            string;
    chartPreviousClose:   number;
    previousClose:        number;
    scale:                number;
    priceHint:            number;
    currentTradingPeriod: CurrentTradingPeriod;
    tradingPeriods:       Array<Post[]>;
    dataGranularity:      string;
    range:                string;
    validRanges:          string[];
}

export interface CurrentTradingPeriod {
    pre:     Post;
    regular: Post;
    post:    Post;
}

export interface Post {
    timezone:  string;
    start:     number;
    end:       number;
    gmtoffset: number;
}