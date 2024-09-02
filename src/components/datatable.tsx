import React from 'react';
import { formatter } from '../utils';

const DataTable = ({ data }) => {
  const { history, finalDateData } = data;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Histórico de Datos y Resultado Final</h1>
      
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="py-3 px-4 text-left text-gray-600">Fecha</th>
            <th className="py-3 px-4 text-left text-gray-600">Valor del Símbolo (USD)</th>
            <th className="py-3 px-4 text-left text-gray-600">Tasa de Cambio (COP/USD)</th>
            <th className="py-3 px-4 text-left text-gray-600">Valor en Moneda (COP)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(history).map(([date, values]) => (
            <tr key={date}>
              <td className="py-2 px-4 border-b border-gray-200">{date}</td>
              <td className="py-2 px-4 border-b border-gray-200">{values.symbolValuation?.toFixed(2)}</td>
              <td className="py-2 px-4 border-b border-gray-200">{formatter.format(values.quoteCurrency?.toFixed(2))}</td>
              <td className="py-2 px-4 border-b border-gray-200">{formatter.format(values.symbolValueInQuoteCurrency?.toFixed(2))}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Resultado Final</h2>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mt-4">
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Valor del Símbolo Final (USD):</td>
              <td className="py-2 px-4 border-b border-gray-200">{finalDateData.symbolValuation?.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Tasa de Cambio Final (COP/USD):</td>
              <td className="py-2 px-4 border-b border-gray-200">{formatter.format(finalDateData.quoteCurrency?.toFixed(2))}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Total de Dolares invertidos (USD):</td>
              <td className="py-2 px-4 border-b border-gray-200">{finalDateData.sumOfSymbolValuation?.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Total Valor en Moneda Invertidos (COP):</td>
              <td className="py-2 px-4 border-b border-gray-200">{formatter.format(finalDateData.totalQuoteCurrencyForSale?.toFixed(2))}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Total Valor del Símbolo para Venta (USD):</td>
              <td className="py-2 px-4 border-b border-gray-200">{finalDateData.totalSymbolValuationForSale?.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Total Valor en Moneda para Venta (COP):</td>
              <td className="py-2 px-4 border-b border-gray-200">{formatter.format(finalDateData.totalQuoteCurrencyForSale?.toFixed(2))}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Ganancia por Valor del Símbolo (USD):</td>
              <td className="py-2 px-4 border-b border-gray-200">{finalDateData.symbolValuationProfit?.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Ganancia por Tasa de Cambio (COP):</td>
              <td className="py-2 px-4 border-b border-gray-200">{formatter.format(finalDateData.quoteCurrencyProfit?.toFixed(2))}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
