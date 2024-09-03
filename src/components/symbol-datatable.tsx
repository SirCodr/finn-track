import { TrackProfitResponse } from '../types';
import { copFormatter, usdFormatter } from '../utils';

type Props = {
  data: TrackProfitResponse
}

const SymbolsDatatable = ({ data }: Props) => {
  const { history, finalDateData, meta } = data;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Histórico de Datos y Resultado Final</h1>
      
      {/* Sección para renderizar la meta data */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Meta Data</h2>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mt-4">
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Símbolo:</td>
              <td className="py-2 px-4 border-b border-gray-200">{meta.symbol}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Moneda Base:</td>
              <td className="py-2 px-4 border-b border-gray-200">{meta.basecurrency}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Moneda de Cotización:</td>
              <td className="py-2 px-4 border-b border-gray-200">{meta.quoteCurrency}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Cantidad de Símbolos por Mes:</td>
              <td className="py-2 px-4 border-b border-gray-200">{meta.symbolsAmountPerMonth}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Total de Símbolos:</td>
              <td className="py-2 px-4 border-b border-gray-200">{meta.countOfSymbols}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tabla principal */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="py-3 px-4 text-left text-gray-600">Fecha</th>
            <th className="py-3 px-4 text-left text-gray-600">Valor del Símbolo (USD)</th>
            <th className="py-3 px-4 text-left text-gray-600">Tasa de Cambio (COP/USD)</th>
            <th className="py-3 px-4 text-left text-gray-600">Valor en Moneda (COP)</th>
            {meta.symbolsAmountPerMonth !== '1' && (
              <>
                <th className="py-3 px-4 text-left text-gray-600">Valor del Símbolo por Monto (USD)</th>
                <th className="py-3 px-4 text-left text-gray-600">Valor en Moneda por Monto (COP)</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {Object.entries(history).map(([date, values]) => (
            <tr key={date}>
              <td className="py-2 px-4 border-b border-gray-200">{date}</td>
              <td className="py-2 px-4 border-b border-gray-200">{usdFormatter.format(Number(values.symbolValuation.toFixed(2)))}</td>
              <td className="py-2 px-4 border-b border-gray-200">{copFormatter.format(values.quoteCurrency)}</td>
              <td className="py-2 px-4 border-b border-gray-200">{copFormatter.format(Number(values.symbolValueInQuoteCurrency?.toFixed(2)))}</td>
              {meta.symbolsAmountPerMonth !== '1' && (
                <>
                  <td className="py-2 px-4 border-b border-gray-200">{usdFormatter.format(Number(values.symbolValuationPerAmount?.toFixed(2)))}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{copFormatter.format(Number(values.symbolValueInQuoteCurrencyPerAmount?.toFixed(2)))}</td>
                </>
              )}
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
              <td className="py-2 px-4 border-b border-gray-200">{usdFormatter.format(Number(finalDateData.symbolValuation?.toFixed(2)))}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Tasa de Cambio Final (COP/USD):</td>
              <td className="py-2 px-4 border-b border-gray-200">{copFormatter.format(finalDateData.quoteCurrency)}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Total Valor Disponible del Símbolo (USD):</td>
              <td className="py-2 px-4 border-b border-gray-200">{usdFormatter.format(Number(finalDateData.availableSymbolValuation?.toFixed(2)))}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Total Valor Disponible en Moneda (COP):</td>
              <td className="py-2 px-4 border-b border-gray-200">{copFormatter.format(Number(finalDateData.availableQuoteCurrency?.toFixed(2)))}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Valor Potencial del Símbolo (USD):</td>
              <td className="py-2 px-4 border-b border-gray-200">{usdFormatter.format(Number(finalDateData.potentialSymbolValuation?.toFixed(2)))}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Valor Potencial en Moneda (COP):</td>
              <td className="py-2 px-4 border-b border-gray-200">{copFormatter.format(Number(finalDateData.potentialQuoteCurrency?.toFixed(2)))}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Ganancia por Valor del Símbolo (USD):</td>
              <td className="py-2 px-4 border-b border-gray-200">{usdFormatter.format(Number(finalDateData.symbolValuationProfit?.toFixed(2)))}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Ganancia por Tasa de Cambio (COP):</td>
              <td className="py-2 px-4 border-b border-gray-200">{copFormatter.format(Number(finalDateData.quoteCurrencyProfit?.toFixed(2)))}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Porcentaje de Ganancia:</td>
              <td className="py-2 px-4 border-b border-gray-200">{(finalDateData.profitPercentage * 100).toFixed(2)}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SymbolsDatatable;
