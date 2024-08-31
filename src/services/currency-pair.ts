import { Http } from './http-adapter'

export async function getCurrencyPair(fromCurrency: string, toCurrency: string) {
  return await new Http().get('query', {
    function: 'CURRENCY_EXCHANGE_RATE',
    from_currency: fromCurrency,
    to_currency: toCurrency
  })
}
