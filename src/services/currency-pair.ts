import { CurrencyPairFetchParams } from '../types'
import { Http } from './http-adapter'

export async function getCurrencyPair(props: CurrencyPairFetchParams) {
  return await new Http().get('currency-pair', props)
}
