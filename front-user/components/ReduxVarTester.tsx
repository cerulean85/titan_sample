'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/stores/store';
import { setCurrentMenu } from '@/stores/appConfigSlice'
import { useEffect } from 'react';

const ReduxVarTester = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentMenu("리덕스 변수 출력 테스트!"));
  })
  

  const currentMenu: string = useSelector((state: RootState) => state.appConfig.currentMenu);  

  
  
  return (
    <div>
      {currentMenu}
    </div>
  );
};

export default ReduxVarTester;
