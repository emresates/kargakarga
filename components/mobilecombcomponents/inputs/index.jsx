import React from "react";
import InputFields from "../inputFields";
import ResultFields from "../resultFields";
import CalculationTable from "../table";

const Inputs = () => {
  return (
    <div className="relative mx-2 mt-2 h-full rounded-lg bg-white p-20">
      <div className="flex">
        <span className="absolute left-[45%] top-1/2 h-96 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gray-300"></span>
        <div className="flex-1">
          <h1 className="w-[calc(100%-500px)] border-b-2 border-gray-200 pb-3 text-xl font-semibold uppercase">
            Girdi alanı
          </h1>
          <p className="mt-3">
            Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları
            doldurun:
          </p>
          <InputFields />
        </div>
        <div className="flex-1">
          <h1 className="w-[calc(100%-500px)] border-b-2 border-gray-200 pb-3 text-xl font-semibold uppercase">
            sonuç alanı
          </h1>
          <p className="mt-3">
            Girdi Alanı'nda girdiğiniz değerlere göre salınan gaz miktarları
            aşağıdaki gibidir:
          </p>
          <ResultFields />
          <div className="mr-40 mt-6 flex items-center justify-end gap-x-4">
            <button className="w-28 rounded-2xl bg-[#0D1840] py-2 text-white">
              Sıfırla
            </button>
            <button className="w-28 rounded-2xl bg-[#0D1840] py-2 text-white">
              Kaydet
            </button>
          </div>
        </div>
      </div>

      <CalculationTable />
    </div>
  );
};

export default Inputs;
