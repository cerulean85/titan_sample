// components/LanguageSwitcher.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = ({ currentLocale }: { currentLocale: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${lang}`);
    router.push(newPath);
  };

  return (
    <div>
      <div>{currentLocale}</div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ko')}>한국어</button>
    </div>
  );
};

export default LanguageSwitcher;
