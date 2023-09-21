'use client';

import { useEffect, useState } from 'react';

function getCookieValue(cookieName) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
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
    const cookieName1 = 'kullaniciAdi';
    const cookieValue1 = 'JohnDoe';

    const expires1 = new Date();
    expires1.setDate(expires1.getDate() + 30);

    const cookieName2 = 'tercihler';
    const cookieValue2 = 'dil=tr; tema=koyu';

    document.cookie = `${cookieName1}=${cookieValue1}; expires=${expires1.toUTCString()}; path=/`;
    document.cookie = `${cookieName2}=${cookieValue2}; expires=${expires1.toUTCString()}; path=/`;

    setAcceptedCookies(true);
  };

  const handleRejectCookies = () => {
    setAcceptedCookies(false);
  };

  useEffect(() => {
    const x = getCookieValue('kullaniciAdi');
    const y = getCookieValue('tercihler');
    console.log(x, y);

    if (x != null || y != null) {
      setAcceptedCookies(true);
    }

    setInitialLoad(true);
  }, []);

  if (acceptedCookies || !initialLoad) {
    return null;
  }

  return (
    <div className='cookie-policy'>
      <p>
        Web sitemizde çerez kullanıyoruz. Çerez politikamızı incelemek için lütfen{' '}
        buraya tıklayın.
      </p>
      <button onClick={handleAcceptCookies}>Evet</button>
      <button onClick={handleRejectCookies}>Hayır</button>
    </div>
  );
}
