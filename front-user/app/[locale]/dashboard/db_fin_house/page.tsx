'use client'
import React from 'react';
import BaseRenderer from '@/components/BaseRenderer';
import { useRouter, usePathname  } from 'next/navigation';

const DashboardFinWarehousePage = ({ params }: { params: { locale: string } }) => {
  const xrouter = useRouter();
  return (
    <div>
      <h1>Welcome to the DashboardFinWarehousePage</h1>
      <BaseRenderer router={xrouter} params={params} />
    </div>
  );
};

export default DashboardFinWarehousePage;