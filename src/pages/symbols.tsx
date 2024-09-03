import { FormEvent, useEffect, useState } from 'react';
import { getTrackProfit } from '../services/track-profit';
import { FetchTrackProfitParams, TrackProfitResponse } from '../types';
import DataTable from '../components/datatable';
import Spinner from '../components/spinner';

const SymbolsPage = () => {
  const [symbol, setSymbol] = useState('VOO');
  const [data, setData] = useState<FetchTrackProfitParams>({
    currency: 'COP=X',
    startDate: '2023-08-01',
    endDate: '2024-09-01',
    amount: 1
  });
  const [response, setResponse] = useState<TrackProfitResponse | null>(null);
  const [isLoading, setLoading] = useState(false)

  function handleDataChange(inputName: string, value: unknown) {
    setData({
      ...data,
      [inputName]: value
    });
  }

  async function handleSubmit(e: FormEvent) {
    try {
      e.preventDefault();
      setLoading(true)
      const response = await getTrackProfit(symbol, data);
      
      setResponse(response);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <>
      <form className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md sm:p-6' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='symbol'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Symbol
          </label>
          <input
            type='text'
            name='symbol'
            id='symbol'
            className='w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
            placeholder='VOO'
            onInput={(e) => setSymbol(e.currentTarget.value)}
            value={symbol}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='currency'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Currency
          </label>
          <input
            type='text'
            name='currency'
            id='currency'
            className='w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 uppercase'
            placeholder='USD'
            onInput={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            value={data.currency}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='start-date'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Start Date
          </label>
          <input
            type='date'
            name='startDate'
            id='start-date'
            className='w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
            onChange={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            value={data.startDate}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='end-date'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            End Date
          </label>
          <input
            type='date'
            name='endDate'
            id='end-date'
            className='w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
            onChange={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            value={data.endDate}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='amount'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Amount
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            className='w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
            placeholder='1'
            onInput={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            required
            value={data.amount}
          />
        </div>
        <button
          type='submit'
          className='w-full py-2.5 mb-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
          disabled={isLoading}
        >
          Calcular
        </button>
        {isLoading && <div className='w-full flex justify-center'><Spinner /></div>}
      </form>
      {response && !isLoading && <DataTable data={response} />}
    </>
  );
};

export default SymbolsPage;
