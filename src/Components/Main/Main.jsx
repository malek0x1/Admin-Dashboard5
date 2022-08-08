import { ArrowDownwardOutlined, MoreVertOutlined, RequestPageOutlined, Search, StorefrontOutlined, SyncAlt } from '@mui/icons-material'
import React from 'react'
import './Main.css'
import IMG from './imgs/graph.png'
import IMG2 from './imgs/graph2.png'
import IMG3 from './imgs/graph3.png'
import IMG4 from './imgs/bitcoin.png'
import IMG5 from './imgs/ripple.png'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { data } from './data.js'
import Card from './Card'
import MainChart from './MainChart'
import Swap from './Swap'
const Main = () => {



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
                    <Card color="yellow" name="BTC" percentage="+0.31" convertTo="Bitcon to USD" price="51,281" src={IMG} />
                    <Card color="green" name="ETH" percentage="+0.99" convertTo="Ethrium to USD" price="51,281" src={IMG2} />
                    <Card color="red" name="LTC" percentage="+0.84" convertTo="Litecoin to USD" price="51,281" src={IMG3} />
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
                    <MainChart matched={matched} data={data} />

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
                        <Swap src={IMG4} value="17" type="bit" />
                        <Swap src={IMG5} value="82" type="ripple" />
                        <Swap src={IMG4} value="13" type="bit" />
                        <Swap src={IMG5} value="24" type="ripple" />
                        <Swap src={IMG4} value="9" type="bit" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main