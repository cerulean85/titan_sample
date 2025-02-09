'use client';  // 클라이언트 전용 컴포넌트임을 명시

import { ReactNode } from 'react';
import AlarmPopup from "@/components/AlarmPopup";
import { setVisibleAlarmPopup } from '@/stores/appConfigSlice'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/stores/store';

export default function CommonMain({ children }: { children: ReactNode }) {

	const dispatch: AppDispatch = useDispatch();
	const closeAlarmPopup = () => {dispatch(setVisibleAlarmPopup(false)); }
	const openAlarmPopup = () => {dispatch(setVisibleAlarmPopup(true)); }

	openAlarmPopup();

  return (
		<main>

			{/* <div>
				테스트 영역
				<button className="btn btn-primary" onClick={openAlarmPopup}>팝업열기</button>
			</div> */}
			{children}

      <AlarmPopup params={{}}/>
		</main>
	)
}
