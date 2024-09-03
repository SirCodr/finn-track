export type FetchTrackProfitParams = {
  currency: string
  startDate: string
  endDate: string
  amount: number
}

export interface TrackProfitResponse {
    meta:          Meta;
    history:       { [key: string]: History };
    finalDateData: FinalDateData;
}

export interface FinalDateData {
    symbolValuation:          number;
    quoteCurrency:            number;
    availableSymbolValuation: number;
    availableQuoteCurrency:   number;
    potentialSymbolValuation: number;
    potentialQuoteCurrency:   number;
    symbolValuationProfit:    number;
    quoteCurrencyProfit:      number;
    profitPercentage:         number;
}

export interface History {
    symbolValuation:                     number;
    quoteCurrency:                       number;
    symbolValueInQuoteCurrency:          number;
    symbolValuationPerAmount:            number;
    symbolValueInQuoteCurrencyPerAmount: number;
}

export interface Meta {
    symbol:                string;
    symbolsAmountPerMonth: string;
    countOfSymbols:        number;
    basecurrency:          string;
    quoteCurrency:         string;
}
