import { ReactNode } from 'react';
import ProviderWrapper from '@/components/ProviderWrapper';
import CommonHeader from "@/layouts/header";
import CommonNav from "@/layouts/nav";
import CommonFooter from "@/layouts/footer";
import "@/styles/common.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import CommonMain from '@/layouts/main';
import { getMessages } from '@/lib/domain';

export default async function AppLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  const _p = await params;
  const _lt = await getMessages(_p.locale);

  return (
    <ProviderWrapper>
    <html lang={_p.locale}>
      <head>
        <title>LING LONG</title>
      </head>
      <body>
        <div className="d-flex h-screen main-box">      
          <CommonNav locale={_p.locale} lt={_lt}></CommonNav>
          <section className="flex-1 bg-gray-100 overflow-auto w-100" >

              <CommonHeader locale={_p.locale} lt={_lt}></CommonHeader>
              <CommonMain children={children}></CommonMain>              
          </section>
        </div>
        <CommonFooter></CommonFooter>
      </body>
    </html>
    </ProviderWrapper>
  );
}
