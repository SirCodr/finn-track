import { SavingsResponse } from "../types";
import { copFormatter } from "../utils";

type Props = {
  data: SavingsResponse
}

const SavingsDatatable = ({ data }: Props) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left text-gray-600">Mes</th>
            <th className="py-3 px-4 text-left text-gray-600">Monto Acumulado Sin Ganancias</th>
            <th className="py-3 px-4 text-left text-gray-600">Monto Acumulado</th>
            <th className="py-3 px-4 text-left text-gray-600">Monto de Ganancias</th>
            <th className="py-3 px-4 text-left text-gray-600">Ganancias Acumuladas</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([month, values], index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 px-4">{parseInt(month.split('-')[1])}</td>
              <td className="py-2 px-4">{copFormatter.format(Number(values.accNonProfitAmount.toFixed(0)))}</td>
              <td className="py-2 px-4">{copFormatter.format(Number(values.accumulatedAmount.toFixed(0)))}</td>
              <td className="py-2 px-4">{copFormatter.format(Number(values.profitAmount.toFixed(0)))}</td>
              <td className="py-2 px-4">{copFormatter.format(Number(values.accProfitAmount.toFixed(0)))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavingsDatatable;
