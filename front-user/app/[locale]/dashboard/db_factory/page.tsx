'use client'
import React from 'react';
import BaseRenderer from '@/components/BaseRenderer';
import { useRouter, usePathname  } from 'next/navigation';

import { useState } from "react";
import Image from "next/image";

const DashboardFactoryPage = ({ params }: { params: { locale: string } }) => {
  const xrouter = useRouter();
  const [popupVisible, setPopupVisible] = useState(false);
  return (
    <div>
      <Image src="/images/icon/ic_lang.svg" width={36} height={36} alt='로고'/>
      {/* <Image width={20} height={20} src="/images/icon/ic_lang.svg" alt="언어변경"/> */}
      <h1>Welcome to the Dashboard Factory</h1>

      

      <BaseRenderer router={xrouter} params={params} />


    </div>
  );
};

export default DashboardFactoryPage;