import { LocalAtmOutlined, MilitaryTechOutlined, RepeatOutlined, SignalCellular0BarOutlined, SignalCellularAlt, SignalCellularAltOutlined } from '@mui/icons-material'
import React from 'react'
import './RightBar.css'
const RightBar = () => {
    return (
        <div className="RightBar">
            <div className="RightBar-header">
                <b>Hi, Malek</b>
                <img className='img-png' src="https://bootdey.com/img/Content/avatar/avatar7.png" />
            </div>
            <div className="RightBar-totals">
                <div className="RightBar-total">
                    <div className="RightBar-total-icon purple  ">
                        <MilitaryTechOutlined className="RightBar-total-icon-color purple" fontSize='large' />
                    </div>
                    <div className="RightBar-total-info">
                        <p>TOTAL</p>
                        <h3>$5,186</h3>
                    </div>

                </div>
                <div className="RightBar-total">
                    <div className="RightBar-total-icon greenx">
                        <SignalCellularAltOutlined className="RightBar-total-icon-color greenx" fontSize='large' />
                    </div>
                    <div className="RightBar-total-info">
                        <p>TOTAL Net Worth</p>
                        <h3>$99,999</h3>
                    </div>

                </div>
                <div className="RightBar-total">
                    <div className="RightBar-total-icon orange">
                        <LocalAtmOutlined className="RightBar-total-icon-color orange" fontSize='large' />
                    </div>
                    <div className="RightBar-total-info">
                        <p>TOTAL EARNING</p>
                        <h3>$3,318</h3>
                    </div>

                </div>
                <div className="RightBar-total">
                    <div className="RightBar-total-icon blue">
                        <RepeatOutlined className="RightBar-total-icon-color blue" fontSize='large' />
                    </div>
                    <div className="RightBar-total-info">
                        <p>TOTAL LOSSES</p>
                        <h3>$70,000</h3>
                    </div>
                </div>

            </div>
            <div className="button-wrapper">
                <button>Create a Swap</button>
            </div>
        </div>
    )
}

export default RightBar