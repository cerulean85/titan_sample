"use client";
import { setVisibleAlarmPopup } from '@/stores/appConfigSlice'
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/stores/store';
import Image from "next/image";
import Bullet from '@/assets/icon/Bullet';

interface AlarmPopupProps {
    params: any;
}

export default function AlarmPopup({ params }: AlarmPopupProps) {

  const dispatch: AppDispatch = useDispatch();
	const closeAlarmPopup = () => {dispatch(setVisibleAlarmPopup(false)); }
  const visibleAlarmPopup = useSelector((state: RootState) => state.appConfig.visibleAlarmPopup);

    

    return (
      <div className={`popup-overlay ${visibleAlarmPopup ? 'popup-visible':'popup-hidden'}`}>
        <div className='popup-contents'>
        <div className="popup-anim mt-3">
          <div>
            <img src="/images/icon/ic_siren.gif" alt="GIF 예제" width={160} height={160} />
            <img src="/images/icon/ic_hack.gif" alt="GIF 예제" width={160} height={160} />
          </div>
          <div>
            알람이 발생하였습니다.
          </div>
          <div>
            (CODE-10 외 총 3건)
          </div>    
        </div>
        <div className='popup-info overflow-auto'>
        <div className='mt-4 contents'>
          <p>
            <div className='d-flex'>
              <Bullet />
              <label className='me-2'><b>알람코드</b></label>
              <span>CODE-10</span>
            </div>
          </p>
          <p>
            <div className='d-flex'>
            <Bullet />
            <label className='me-2'><b>발생일시</b></label>
              <span>2022.2.12.</span>
            </div>
          </p>

          <p>
            <div className='d-flex'>
              <Bullet />
              <label className='me-2'><b>매뉴얼</b></label>
            </div>
            <div>
              <ul>
                <li><a href="http://localhost:3000/samples/sample.pdf" target="_blank">조치매뉴얼1.pdf</a></li>
                <li>조치방법.jpg</li>
              </ul>
            </div>
          </p>

          <p>
            <div className='d-flex'>
              <Bullet />
              <label className='me-2'><b>조치방법</b></label>
            </div>
            <div>
              <pre>
                1) 화면을 킨다. <br/>
                2) 조치한다.
              </pre>
            </div>
          </p>

          <p>
            <div className='d-flex'>
              <Bullet />
              <label className='me-2'><b>담당자</b></label>
            </div>
            <div>
              <table>
                <tr>
                  <th>이름</th>
                  <th>이메일</th>
                  <th>전화번호</th>
                </tr>
                <tr>
                  <td>김진환</td>
                  <td>aaa@email.com</td>
                  <td>010-5555-6666</td>
                </tr>
                <tr>
                  <td>김진환</td>
                  <td>aaa@email.com</td>
                  <td>010-5555-6666</td>
                </tr>
                <tr>
                  <td>김진환</td>
                  <td>aaa@email.com</td>
                  <td>010-5555-6666</td>
                </tr>
                <tr>
                  <td>김진환</td>
                  <td>aaa@email.com</td>
                  <td>010-5555-6666</td>
                </tr>
                <tr>
                  <td>김진환</td>
                  <td>aaa@email.com</td>
                  <td>010-5555-6666</td>
                </tr>
              </table>
            </div>
          </p>          
        </div>
        </div>
        <button className="btn btn-danger" onClick={closeAlarmPopup}>닫기</button>
        </div>
      </div>
    );
}

