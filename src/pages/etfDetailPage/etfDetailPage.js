import { NavLink } from "react-router-dom";
import HeaderComponent from "../../components/header_component/header_component";
import './etfDetailPage.scss';
import { FaSearch } from 'react-icons/fa';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Maindropdown } from "../../components/utilities/dropdown";
import { BsArrowUpRight, BsArrowDownLeft } from 'react-icons/bs';
import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';
  import { Line, Doughnut } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  import { PieChart } from "react-minimal-pie-chart";
import { TokenVolumeCheckout } from "../../components/utilities/tokens_list";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

const EtfDetailPage = () => {


    const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
          },
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      };

      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

      const data = {
        labels,
        datasets: [
          {
            label: 'BTC',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
          },
          {
            label: 'ETH',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
          },
          {
            label: 'USDT',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: '#ff6b08',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y2',
          },
        ],
      };

    return (

        <div className="etf_body" >
            <HeaderComponent location={"swap"} />

            <div className="etf_detail" >
                <div className="etf_detail_top" >
                    DTF Overview
                </div>

                <div className="etf_detail_main" >

                    <div className="etf_detail_main_left" >

                        <div className="etf_detail_main_left_part" >

                            <div className="etf_detail_main_left_part_split" >
                                <h4>ETF name</h4>
                                <h6>DFT</h6>
                            </div>

                            <div className="etf_detail_main_left_part_split" >
                                <h4>ETF symbol</h4>
                                <h6>DFT</h6>
                            </div>

                        </div>

                        <div className="etf_detail_main_left_part" >

                            <div className="etf_detail_main_left_part_split" >
                                <h4>Market cap</h4>
                                <h6>$200M</h6>
                            </div>

                            <div className="etf_detail_main_left_part_split" >
                                <h4>Volume</h4>
                                <h6>$28M</h6>
                            </div>

                        </div>

                    </div>

                    <div className="etf_detail_main_right" >
                    <Line options={options} data={data} />
                    </div>

                </div>

                <div className="etf_detail_transaction" >

                    <div className="etf_detail_transaction_top" >
                        Transactions
                    </div>

                    <div className="etf_detail_transaction_body" >
                        No Transaction
                    </div>

                </div>

                <div className="etf_detail_history" >

                    <div className="etf_detail_history_left" >
                        
                        <div className="etf_detail_history_left_top" >
                            Live & Historical data
                        </div>

                        <div className="etf_detail_history_left_div" >

                            <div className="etf_detail_history_left_div_title" >
                                Price
                            </div>

                            <div className="etf_detail_history_left_div_split" >
                                <h5>$1</h5>
                                <h6>100%</h6>
                            </div>

                            <div className="etf_detail_history_left_div_data" >
                                No data
                            </div>

                            <div className="etf_detail_history_left_div_time" >
                                <div>24h</div>
                                <div>7d</div>
                                <div>30d</div>
                            </div>

                        </div>

                        <div className="etf_detail_history_left_div" >

                            <div className="etf_detail_history_left_div_title" >
                                Supply
                            </div>

                            <div className="etf_detail_history_left_div_split" >
                                <h5>0 DFT</h5>
                                <h6>0%</h6>
                            </div>

                            <div className="etf_detail_history_left_div_data" >
                                No data
                            </div>

                            <div className="etf_detail_history_left_div_time" >
                                <div>24h</div>
                                <div>7d</div>
                                <div>30d</div>
                            </div>

                        </div>

                    </div>

                    <div className="etf_detail_history_right" >

                            <div className="etf_detail_history_left_top" >
                                Token Metrics
                            </div>
{/* 
                        <div className="etf_detail_history_right_pie" >

                            <PieChart
                                data={[ 
                                    {title:"ETH", value: 20, color:"#f32170"},
                                    {title:"BTC", value: 30, color:"#ff6b08"},
                                    {title:"USDT", value: 50, color:"#eedd44"},
                                ]}
                            />

                        </div> */}

                        <div>

                                <TokenVolumeCheckout
                                    amountInUsd={15312}
                                    coin="ETH"
                                    percentage={20}
                                />

                                <TokenVolumeCheckout
                                    amountInUsd={15312}
                                    coin="USDT"
                                    percentage={50}
                                />

                                <TokenVolumeCheckout
                                    amountInUsd={15312}
                                    coin="BNB"
                                    percentage={30}
                                />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default EtfDetailPage;