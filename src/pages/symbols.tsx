import { FormEvent, useEffect, useState } from 'react'
import { getTrackProfit } from '../services/track-profit'
import { FetchTrackProfitParams, SymbolsHistoryResponse } from '../types'
import DataTable from '../components/datatable'

const SymbolsPage = () => {
  const [symbol, setSymbol] = useState('')
  const [data, setData] = useState<FetchTrackProfitParams>({
    currency: '',
    startDate: '',
    endDate: '',
    interval: ''
  })
  const [response, setResponse] = useState<SymbolsHistoryResponse | null >(null)

  function handleDataChange(inputName: string, value: unknown) {
    setData({
      ...data,
      [inputName]: value
    })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const response = await getTrackProfit(symbol, data)
    
    setResponse(response)
  }

  useEffect(() => {
    console.log({ data })
  }, [data])

  return (
    <>
      <form className='max-w-sm mx-auto' onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label
            htmlFor='symbol'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Symbol
          </label>
          <input
            type='text'
            name='symbol'
            id='symbol'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 uppercase'
            placeholder='VOO'
            onInput={(e) => setSymbol(e.currentTarget.value)}
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='currency'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Currency
          </label>
          <input
            type='text'
            name='currency'
            id='currency'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 uppercase'
            placeholder='USD'
            onInput={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='start-date'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Start Date
          </label>
          <input
            type='date'
            name='startDate'
            id='start-date'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder=''
            onChange={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='end-date'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            End Date
          </label>
          <input
            type='date'
            name='endDate'
            id='end-date'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder=''
            onChange={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='interval'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Interval
          </label>
          <input
            type='text'
            name='interval'
            id='interval'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='1month'
            onInput={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            required
            defaultValue='1mo'
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
      {response && <DataTable data={response} />}
    </>
  )
}

export default SymbolsPage
