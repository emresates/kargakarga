"use client";

import { useEffect, useState } from "react";

function getCookieValue(cookieName) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === cookieName) {
      return value;
    }
  }
  return null;
}

export default function CookiePolicy() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);

  const handleAcceptCookies = () => {
    const cookieName1 = "kullaniciAdi";
    const cookieValue1 = "JohnDoe";

    const expires1 = new Date();
    expires1.setDate(expires1.getDate() + 30);

    const cookieName2 = "tercihler";
    const cookieValue2 = "dil=tr; tema=koyu";

    document.cookie = `${cookieName1}=${cookieValue1}; expires=${expires1.toUTCString()}; path=/`;
    document.cookie = `${cookieName2}=${cookieValue2}; expires=${expires1.toUTCString()}; path=/`;

    setAcceptedCookies(true);
  };

  const handleRejectCookies = () => {
    setAcceptedCookies(false);
  };

  useEffect(() => {
    const x = getCookieValue("kullaniciAdi");
    const y = getCookieValue("tercihler");

    if (x != null || y != null) {
      setAcceptedCookies(true);
    }

    setInitialLoad(true);
  }, []);

  if (acceptedCookies || !initialLoad) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 flex h-24 w-full items-center justify-between bg-black px-20 py-10 text-white">
      <p className="flex-[2] text-base font-normal leading-6">
        privacy setting — This site uses third-party website traking
        technologies to provide and continially improve our services. I agree
        and may revoke or change my consent at any time with effect for the
        future. See also our <span className="underline">Privacy Policy </span>
        and <span className="underline">Cookies </span>
      </p>
      <div className="flex flex-1 items-center justify-end gap-3">
        <button
          onClick={handleRejectCookies}
          className="rounded-2xl bg-[#4A4A4A] px-8 py-5 font-semibold"
        >
          Deny
        </button>
        <button
          onClick={handleAcceptCookies}
          className="rounded-2xl bg-white px-8 py-5 font-semibold text-black"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
