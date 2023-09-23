"use client";

import { useState } from "react";

export default function Message() {
  // States
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={`fixed left-0 z-50 flex h-24 w-full items-center justify-between bg-black px-20 py-10 text-white transition-all ${
        visible ? "bottom-0" : "-bottom-28"
      }`}
    >
      <p className="flex-[2] text-base font-normal leading-6">
        Merhaba, öncelikle sayfaya hoşgeldiniz. Geri landing page'e dönmek için
        sol yukarıdaki profil resmine tıklayabilirsiniz. İyi incelemeler :)
      </p>
      <div className="flex flex-1 items-center justify-end gap-3">
        <button
          onClick={() => setVisible(false)}
          className="rounded-2xl bg-white px-6 py-3 font-semibold text-black"
        >
          Anladım
        </button>
      </div>
    </div>
  );
}
