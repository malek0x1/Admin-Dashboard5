import { ArrowDownwardOutlined, MoreVertOutlined, RequestPageOutlined, Search, StorefrontOutlined, SyncAlt } from '@mui/icons-material'
import React from 'react'
import './Main.css'
import IMG from './graph.png'
import IMG2 from './graph2.png'
import IMG3 from './graph3.png'
import IMG4 from './bitcoin.png'
import IMG5 from './ripple.png'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Main = () => {


    const data = [
        {
            name: 'Apr',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Jun',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Jul',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Sep',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Dec',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Feb',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Mar',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const theme = useTheme();
    const matched = useMediaQuery(theme.breakpoints.down("sm"))


    return (
        <div className='Main'>
            <div className="Main-Header">
                <div className="Main-Header-input-wrapper">
                    <input type="text" className='Main-Header-input' placeholder="Search..." />
                    <Search className="Search-Icon" />
                </div>
                <div className="Main-Header-icons">
                    <RequestPageOutlined className="icon-ind" fontSize='small' />
                    <MoreVertOutlined className="icon-ind" fontSize='small' />
                    <StorefrontOutlined className="icon-ind" fontSize='small' />
                </div>
                <div className="Main-Header-links">
                    <p>Wallet</p>
                    <p>Invoice</p>
                </div>
            </div>
            <div className="Main-Body">
                <div className="Main-Body-Cards">
                    <div className="Main-Body-Card yellow">
                        <div className="Card-Header">
                            <h2 className='crypto-name yellow-name'>BTC</h2>
                            <div className="percentage yellow-per">+0.31%</div>
                        </div>
                        <span className="yellow-span">Bitcon to USD</span>
                        <div className="glutch"></div>
                        <img src={IMG} className="img-graph" alt="" draggable={false} />
                        <h2 className="price-h2">$51,281</h2>
                        <p className="p-do-u-know">30% of your portfolio</p>
                    </div>
                    {/*  */}


                    <div className="Main-Body-Card green">
                        <div className="Card-Header">
                            <h2 className='crypto-name green-name'>ETH</h2>
                            <div className="percentage green-per">+0.99%</div>
                        </div>
                        <span className="green-span">Ethrium to USD</span>
                        <div className="glutch"></div>
                        <img src={IMG2} className="img-graph" alt="" draggable={false} />
                        <h2 className="price-h2">$48,125</h2>
                        <p className="p-do-u-know">30% of your portfolio</p>
                    </div>

                    {/*  */}


                    <div className="Main-Body-Card red">
                        <div className="Card-Header">
                            <h2 className='crypto-name red-name'>LTC</h2>
                            <div className="percentage red-per">+0.84%</div>
                        </div>
                        <span className="red-span">Litecoin to USD</span>
                        <div className="glutch"></div>
                        <img className="img-graph" src={IMG3} alt="" draggable={false} />
                        <h2 className="price-h2">$9,231</h2>
                        <p className="p-do-u-know">30% of your portfolio</p>
                    </div>


                </div>
            </div>
            <div className="Main-Footer">
                <div className="Main-Footer-Left">
                    <div className="Main-Footer-Header">
                        <h3>Transactions History</h3>
                        <div className="Main-Footer-Header-switch">
                            9 Month
                            <span>
                                <ArrowDownwardOutlined className="Main-Footer-icon" fontSize='small' />
                            </span>
                        </div>
                    </div>
                    <p className="Main-Footer-p">Transactions In April 2021</p>
                    <p className="Main-Footer-p2">$90,000</p>
                    <LineChart
                        width={matched ? 200 : 500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#2E5FDE" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
                <div className="Main-Footer-Right">
                    <div className="Main-Footer-Header">
                        <h3>Recent Swaps</h3>
                        <div className="Main-Footer-Header-switch">
                            View more
                        </div>
                    </div>
                    <div className="Main-Footer-Right-Header">
                        <p className="Main-Footer-px">Pair</p>
                        <p className="Main-Footer-px">VALUE</p>
                    </div>
                    <div className="swaps-wrapper">
                        <div className="swap">
                            <div className="img-wrapper">
                                <img src={IMG4} className="bit" />
                                {/* <img src={IMG5} className="ripple" /> */}
                            </div>
                            <div className="middle">
                                <div className="middle-top">
                                    <p>0.39811WETH <SyncAlt className="middle-top-icon" fontSize='small' /> 981USDT</p>
                                    <span>Tokennion-6min ago</span>
                                </div>
                                <div className="middle-bottom"></div>
                            </div>

                            <div className="last">
                                <p>49$</p>
                            </div>
                        </div>
                        <div className="swap">
                            <div className="img-wrapper">
                                <img src={IMG5} className="ripple" />
                                {/* <img src={IMG5} className="ripple" /> */}
                            </div>
                            <div className="middle">
                                <div className="middle-top">
                                    <p>0.49081WETH <SyncAlt className="middle-top-icon" fontSize='small' /> 879USDT</p>
                                    <span>Tokennion-6min ago</span>
                                </div>
                                <div className="middle-bottom"></div>
                            </div>

                            <div className="last">
                                <p>52$</p>
                            </div>
                        </div>
                        <div className="swap">
                            <div className="img-wrapper">
                                <img src={IMG4} className="bit" />
                                {/* <img src={IMG5} className="ripple" /> */}
                            </div>
                            <div className="middle">
                                <div className="middle-top">
                                    <p>0.39810WETH <SyncAlt className="middle-top-icon" fontSize='small' /> 921USDT</p>
                                    <span>Tokennion-6min ago</span>
                                </div>
                                <div className="middle-bottom"></div>
                            </div>

                            <div className="last">
                                <p>13$</p>
                            </div>
                        </div>
                        <div className="swap">
                            <div className="img-wrapper">
                                <img src={IMG5} className="ripple" />
                                {/* <img src={IMG5} className="ripple" /> */}
                            </div>
                            <div className="middle">
                                <div className="middle-top">
                                    <p>0.13980WETH <SyncAlt className="middle-top-icon" fontSize='small' /> 311USDT</p>
                                    <span>Tokennion-6min ago</span>
                                </div>
                                <div className="middle-bottom"></div>
                            </div>

                            <div className="last">
                                <p>3$</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Main