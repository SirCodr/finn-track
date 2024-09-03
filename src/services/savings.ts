import { FetchSavingsParams, SavingsResponse } from '../types'
import { Http } from './http-adapter'

export async function getSavingsProfit(params: FetchSavingsParams) {
  const response =  await new Http().get<SavingsResponse>(`savings/compund-interest`, params)

  return response.data
}
