import React from "react";

const CalculationTable = () => {
  return (
    <div className="mt-40">
      <h1 className="mb-4">Hesaplamalar</h1>
      <table className="w-full border border-[#0D1840]">
        <tr className="bg-[#0D1840] text-white">
          <th className="h-16 w-[10%] rounded-tl-3xl border border-white text-center">
            Facility ID
          </th>
          <th className="w-[10%] border border-white text-center">Year</th>
          <th className="w-[10%] border border-white text-center">Fuel</th>
          <th className="w-[10%] border border-white text-center">
            Amount of Fuel
          </th>
          <th className="w-[10%] border border-white text-center">Units</th>
          <th className="w-[10%] border border-white text-center">
            CO<sub>2</sub>
          </th>
          <th className="w-[10%] border border-white text-center">
            CH<sub>4</sub>
          </th>
          <th className="w-[10%] border border-white text-center">
            N<sub>2</sub>O
          </th>
          <th className="w-[10%] border border-white text-center">
            CO
            <sub>
              2 <sup>e</sup>
            </sub>
          </th>
          <th className="w-[10%] rounded-tr-3xl border border-white text-center"></th>
        </tr>
        <tr className="border border-[#0D1840] text-center">
          <td className="h-16 border border-gray-300">1</td>
          <td className="border border-gray-300">2022</td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300">
            <span className="flex flex-col items-center justify-center gap-y-1 text-white">
              <button className="w-11/12 rounded-md bg-[#0D1840]">Sil</button>
              <button className="w-11/12 rounded-md bg-[#0D1840]">
                Düzenle
              </button>
            </span>
          </td>
        </tr>
        <tr className="border border-[#0D1840] text-center">
          <td className="h-16 border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
        </tr>
        <tr className="border border-[#0D1840] text-center">
          <td className="h-16 border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
        </tr>
        <tr className="border border-[#0D1840] text-center">
          <td className="h-16 border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
          <td className="border border-gray-300"></td>
        </tr>
      </table>
    </div>
  );
};

export default CalculationTable;
