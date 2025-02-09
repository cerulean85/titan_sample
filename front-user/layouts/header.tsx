"use client"
import { usePathname  } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/stores/store';
import { useState } from 'react';
import NotiDropBoard from '@/components/NotiDropBoard';
import { 
  setLocale, 
  setLocaleText } from '@/stores/appConfigSlice';
import { 
  getEndpointFromURL,
  getMenunameFromURL
 } from '@/lib/domain';
 import Image from "next/image";

const CommonHeader = ({ locale, lt }: { locale: string, lt: any }) => {
  const dispatch: AppDispatch = useDispatch();
  dispatch(setLocale(locale));
  dispatch(setLocaleText(lt));
  
  const [notiVisible, setNotiVisible] = useState(false);
  const openMenu = () => { setNotiVisible(true); }

  const openAdmin = () => {
    window.open(`/${locale}/admin/ad_user`, '_blank');
  }

  const pathname = usePathname();
  const menuname = getMenunameFromURL(pathname);
  let readableMenuname;
  try {
    readableMenuname = lt.menu[menuname];
  } catch {
    readableMenuname = '';
  }

  const endpoint = getEndpointFromURL(pathname);
  let readableEndpoint;
  try {
    readableEndpoint = lt.endpoint[endpoint];
  } catch {
    readableEndpoint = '';
  }

  return (
    <header>
      <div className="d-flex justify-content-between" >
        <div className="current-dir p-3">
          { (readableMenuname !== '' && readableEndpoint !== '') &&
            ( <strong>{readableMenuname} > {readableEndpoint}</strong> )
          }        
        </div>

        <div className="p-3 d-flex top-menu-bar">
          <div className='mx-3'>
            <a title="My Page">
              <Image src="/images/icon/ic_profile.svg" width={28} height={28} alt='mypage'/>
            </a>

          </div>
          <label>|</label>
          <div className='mx-3'>
            <a title="언어선택">
              <Image src="/images/icon/ic_lang.svg" width={28} height={28} alt='langauge'/>
            </a>
          </div>
          <label className='optional-menu'>|</label>
          <div className='optional-menu mx-3'>
            <a href={`/${locale}/remote`} target='_blank' title="원격접속">
              <Image src="/images/icon/ic_remote.svg" width={28} height={28} alt='remote'/>
            </a>
          </div>
          <label>|</label>
          <div className='mx-3'>
            <a onClick={openMenu} title="알림">
              <Image src="/images/icon/ic_bell.svg" width={30} height={30} alt='notification'/>
            </a>
          </div>
          <label className='optional-menu'>|</label>
          <div className='optional-menu mx-3'>
            <a onClick={openAdmin} title="관리자">
              <Image src="/images/icon/ic_admin.svg" width={32} height={32} alt='admin'/>            
            </a>
          </div>          
          <NotiDropBoard visible={notiVisible} onClose={() => setNotiVisible(false)} />
        </div>
      </div>
    </header>
  )
}

export default CommonHeader