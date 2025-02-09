'use client'
import React from 'react';
import BaseRenderer from '@/components/BaseRenderer';
import { useRouter, usePathname  } from 'next/navigation';

const LogisticsEquipStoragePage = ({ params }: { params: { locale: string } }) => {
  const xrouter = useRouter();
  return (
    <div>
      <h1>Welcome to the LogisticsEquipStoragePage</h1>
      <BaseRenderer router={xrouter} params={params} />
    </div>
  );
};

export default LogisticsEquipStoragePage;