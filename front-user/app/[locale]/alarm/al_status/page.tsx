'use client'
import React from 'react';
import { RootState } from '@/stores/store';
import { useSelector } from 'react-redux';
// import MixedLineBarChartComponent from '@/graphs/mixedLineBarChart';
import MixedLineBarChartComponent2 from '@/graphs/mixedLineBarChart2';
import DoughnutChart from '@/graphs/doughnutChart';
import EChartsComponent from '@/graphs/testChart'

const AlarmStatusPage = () => {
  const lt: any = useSelector((state: RootState) => state.appConfig.localeText);

  const alarmTotal = 1200;
  const alarmFin = 1080;
  const alarmRate = alarmTotal / alarmFin;

  let palletData: any = [
    { id: 1, type: "5개 이하", count: 100, stackCount: 453, average: 4.5 },
    { id: 2, type: "6개 ~ 10개", count: 200, stackCount: 1912, average: 9.5 },
    { id: 3, type: "11개 ~ 15개", count: 200, stackCount: 2800, average: 14.0 },
    { id: 4, type: "16개 이상", count: 250, stackCount: 4320, average: 17.2 },    
  ];

  const palletTotal = 750;
  const palletStackTotal = 750;
  const palletAver = 12.6;

  return (
    <div className='pb-3'>
      <div className='al-status-page d-flex'>
        <div className='d-flex flex-wrap w-full'>
          
          <div className='al-doughnut-card'>
            <div className='title'>알람 처리율</div>
            <div className='doughnut-card-chart'>
              <DoughnutChart value={65} />
            </div>          
          </div>

          <div className=' ms-3'>
            <div className='al-metric-card'>
              <div className='title'>알람 발생</div>
              <div className='metric'>{alarmTotal.toLocaleString()}</div>
            </div>

            <div className='al-metric-card mt-3'>
              <div className='title'>알람 처리</div>
              <div className='metric'>{alarmFin.toLocaleString()}</div>
            </div>
          </div>
        </div>

        <div className='al-cur-series-card ms-3'>
          <div className='title'>알람 발생 그래프</div>
          <div className='chart'>
            <EChartsComponent />
          </div>               
        </div>            
      </div>    

      <div className='al-cur-equip-series-card mt-3'>
        <div className='title'>설비별 알람 발생</div>
        <div className='chart'>
          <EChartsComponent />

          <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>구분</th>
            <th>수량</th>
            <th>적재수량</th>
            <th>평균</th>
          </tr>
        </thead>
        <tbody>
        {palletData.map((d: any, i: any) => (
            <tr key={i}>
              <td>{d.type}</td>
              <td>{d.count}</td>
              <td>{d.stackCount}</td>
              <td>{d.average}</td>
            </tr>
          ))}

          <tr>
            <td>Total</td>
            <td>{palletTotal}</td>
            <td>{palletStackTotal}</td>
            <td>{palletAver}</td>
          </tr>
        </tbody>
      </table>
        </div>  
        
      </div>

    </div>
  );
};

export default AlarmStatusPage;