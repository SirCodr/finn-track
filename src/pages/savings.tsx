import { FormEvent, useState } from 'react';
import { FetchSavingsParams, SavingsResponse } from '../types';
import Spinner from '../components/spinner';
import { getSavingsProfit } from '../services/savings';
import SavingsDatatable from '../components/savings-datatable';

const SavingsPage = () => {
  const [data, setData] = useState<FetchSavingsParams>({
    initialAmount: 3000000,
    months: 12,
    annualInterestPercentage: 13,
    monthlyAmount: 1000000
  });
  const [response, setResponse] = useState<SavingsResponse | null>(null);
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
      const response = await getSavingsProfit(data);
      
      setResponse(response);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md sm:p-6' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='initialAmount'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Initial Amount
          </label>
          <input
            type='number'
            name='initialAmount'
            id='initialAmount'
            className='w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 uppercase'
            placeholder='USD'
            onInput={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            value={data.initialAmount}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='months'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Months
          </label>
          <input
            type='number'
            name='months'
            id='months'
            className='w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
            onChange={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            value={data.months}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='annualInterestPercentage'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Annual Interest Percentage
          </label>
          <input
            type='number'
            name='annualInterestPercentage'
            id='annualInterestPercentage'
            className='w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
            onChange={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            value={data.annualInterestPercentage}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='monthlyAmount'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Monthly Amount
          </label>
          <input
            type='number'
            name='monthlyAmount'
            id='monthlyAmount'
            className='w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
            placeholder='1'
            onInput={(e) =>
              handleDataChange(e.currentTarget.name, e.currentTarget.value)
            }
            required
            value={data.monthlyAmount}
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
      {response && !isLoading && <SavingsDatatable data={response} />}
    </>
  );
};

export default SavingsPage;
