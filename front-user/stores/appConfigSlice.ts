import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentMenu: "",
    currentPage: "",
    isAdmin: false,
    visibleAlarmPopup: false,
    locale: "",
    localeText: {},
    isDashboardMenu: false,
    isLogisticsMenu: false,
    isOperationMenu: false,
    isAlarmMenu: false,

    isAdminUserMenu: false,
    isAdminAlarmMenu: false,
    isAdminNotiMenu: false,
    isAdminAuthMenu: false,
    isAdminEtcMenu: false,

    isFactoryPage: false,
    isFinWarehousePage: false,
    isBasicStoragePage: false,
    isEquipStoragePage: false,
    isShipPage: false,
    isEquipOperPage: false,
    isAlarmStatusPage: false,
    isAlarmHistoryPage: false,
    isReportPage: false,    

}

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setCurrentMenu: (state, action) => { state.currentMenu = action.payload; },
    setCurrentPage: (state, action) => { state.currentPage = action.payload; },
    setIsAdmin: (state, action) => { state.isAdmin = action.payload; },
    setVisibleAlarmPopup: (state, action) => { state.visibleAlarmPopup = action.payload;  },
    setLocaleText: (state, action) => { state.localeText = action.payload; },
    setLocale: (state, action) => { state.locale = action.payload; },
    setIsFactoryPage: (state, action) => { state.isFactoryPage = action.payload; },
    setIsFinWarehousePage: (state, action) => { state.isFinWarehousePage = action.payload; },
    setIsBasicStoragePage: (state, action) => { state.isBasicStoragePage = action.payload; },
    setIsEquipStoragePage: (state, action) => { state.isEquipStoragePage = action.payload; },
    setIsShipPage: (state, action) => { state.isShipPage = action.payload; },
    setIsEquipOperPage: (state, action) => { state.isEquipOperPage = action.payload; },
    setIsAlarmStatusPage: (state, action) => { state.isAlarmStatusPage = action.payload; },
    setIsAlarmHistoryPage: (state, action) => { state.isAlarmHistoryPage = action.payload; },
    setIsReportPage: (state, action) => { state.isReportPage = action.payload; },
    setIsAdminUserPage: (state, action) => { state.isAdminUserPage = action.payload; },
    setIsAdminAlarmPage: (state, action) => { state.isAdminAlarmPage = action.payload; },
    setIsAdminNotiPage: (state, action) => { state.isAdminNotiPage = action.payload; },
    setIsAdminAuthPage: (state, action) => { state.isAdminAuthPage = action.payload; },
    setIsAdminEtcPage: (state, action) => { state.isAdminEtcPage = action.payload; },
  }
});

export const { 
  setCurrentMenu, 
  setCurrentPage, 
  setIsAdmin, 
  setVisibleAlarmPopup, 
  setLocale,
  setLocaleText,
  setIsFactoryPage,
  setIsFinWarehousePage,
  setIsBasicStoragePage,
  setIsEquipStoragePage,
  setIsShipPage, 
  setIsEquipOperPage,
  setIsAlarmStatusPage,
  setIsAlarmHistoryPage,
  setIsReportPage,
  setIsAdminUserPage,
  setIsAdminAlarmPage,
  setIsAdminNotiPage,
  setIsAdminAuthPage,
  setIsAdminEtcPage

} = appConfigSlice.actions;
export default appConfigSlice.reducer;