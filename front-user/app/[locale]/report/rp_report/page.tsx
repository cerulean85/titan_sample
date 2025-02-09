'use client'
import React from 'react';
import BaseRenderer from '@/components/BaseRenderer';
import { useRouter, usePathname  } from 'next/navigation';

const RPReportPage = ({ params }: { params: { locale: string } }) => {
  const xrouter = useRouter();
  return (
    <div>
      <h1>Welcome to the RPReportPage</h1>
      <BaseRenderer router={xrouter} params={params} />
    </div>
  );
};

export default RPReportPage;