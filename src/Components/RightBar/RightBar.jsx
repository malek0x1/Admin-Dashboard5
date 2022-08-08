import { LocalAtmOutlined, MilitaryTechOutlined, RepeatOutlined, SignalCellular0BarOutlined, SignalCellularAlt, SignalCellularAltOutlined } from '@mui/icons-material'
import React from 'react'
import './RightBar.css'
import RightBarTotalItem from './RightBarTotalItem'
const RightBar = () => {
    return (
        <div className="RightBar">
            <div className="RightBar-header">
                <b>Hi, Malek</b>
                <img className='img-png' src="https://bootdey.com/img/Content/avatar/avatar7.png" />
            </div>

            <div className="RightBar-totals">
                <RightBarTotalItem color="purple" title="TOTAL" price="$5,186" icon={MilitaryTechOutlined} />
                <RightBarTotalItem color="greenx" title="TOTAL Net Worth" price="$99,999" icon={SignalCellularAltOutlined} />
                <RightBarTotalItem color="orange" title="TOTAL EARNING" price="$3,318" icon={LocalAtmOutlined} />
                <RightBarTotalItem color="blue" title="TOTAL LOSSES" price="$70,000" icon={RepeatOutlined} />
            </div>
            <div className="button-wrapper">
                <button>Create a Swap</button>
            </div>
        </div>
    )
}

export default RightBar