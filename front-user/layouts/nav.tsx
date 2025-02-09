"use client"
import { useRouter, usePathname  } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/stores/store';
import { useState, useEffect } from 'react';
import NotiDropBoard from '@/components/NotiDropBoard';
import NavSubMenuList from '@/components/NavSubMenuList';
import { 
  setCurrentMenu, 
  setCurrentPage, 
  setLocale, 
  setLocaleText } from '@/stores/appConfigSlice'
import Image from "next/image";

const CommonNav = ({ locale, lt }: { locale: string, lt: any }) => {

  const dispatch: AppDispatch = useDispatch();
  dispatch(setLocale(locale));
  dispatch(setLocaleText(lt));
  
  const menuNames = lt.menu;
  const menuKeys = Object.keys(menuNames);
    
  const currentMenu = useSelector((state: RootState) => state.appConfig.currentMenu);

  const router = useRouter();

  const movePage = (menuKey: string, pageEndpoint: string) => {                     
    dispatch(setCurrentMenu(menuKey));
    dispatch(setCurrentPage(pageEndpoint));
    router.push(`/${locale}/${menuKey}/${pageEndpoint}`); 
  }

  const pageNames = lt.endpoint;
  const endpoints: any = {
    dashboard: ["db_factory", "db_fin_house"],
    logistics: ["log_basic", "log_equip", "log_ship"],
    operation: ["op_equip_oper"],
    alarm: ["al_status", "al_history"],
    report: ["rp_report"],
  }

  return (
    <nav className="nav-main h-full bg-gray-900 text-white">
      <div className="bg-primary text-white p-3">로고</div>
      {menuKeys.map((menuKey, index) => (
          <div className="px-3 mt-4" key={index}>
            <div className="d-flex menu-label">
            <Image className="nav-title-bullet" src={`/images/icon/ic_${menuKey}.svg`} width={26} height={26} alt="bullet" />
              {menuNames[menuKey]}
            </div>
            <div>
              {endpoints[menuKey].map((endpoint: any, index: any) => (
                  <div className="d-flex tab-button mt-2" key={index}>
                    <Image className="nav-tab-bullet" src="/images/icon/ic_bullet.svg" width={18} height={18} alt="bullet" />
                    <a onClick={() => movePage(menuKey, endpoint)}>{pageNames[endpoint]}</a>
                  </div>
              ))}
            </div>
          </div>
      ))}
    </nav>
  )
}

export default CommonNav