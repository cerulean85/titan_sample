'use client'
import React, { useEffect } from 'react';
import { RootState, AppDispatch } from '@/stores/store';
import { useSelector, useDispatch } from 'react-redux';
import MixedLineBarChartComponent from '@/graphs/mixedLineBarChart';
import DoughnutChartComponent from '@/graphs/doughnutChart';

const LogisticsBasicStoragePage = () => {
  const lt: any = useSelector((state: RootState) => state.appConfig.localeText);

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
    <div>
      <h1>{lt.component.auto_storage_board}</h1>
      <div className='d-flex flex-wrap'>
        <div><DoughnutChartComponent /></div>
        <div>
          <div>적치최대치: 18000</div>
          <div>실시간적치량: 14760</div>
        </div>
      </div>
      

      <h1>{lt.component.pallet_storage_board}</h1>
      <div>
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
      
    <h1>{lt.component.long_product_storage_board}</h1>
    <div>
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
    
    <h1>{lt.component.storage_graph}</h1>
    <div><MixedLineBarChartComponent /></div>
    </div>
  );
};

export default LogisticsBasicStoragePage;