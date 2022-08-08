import { SyncAlt } from '@mui/icons-material'
import React from 'react'

const Swap = (prop) => {
    return (
        <div className="swap">
            <div className="img-wrapper">
                <img src={prop.src} className={prop.type} />
            </div>
            <div className="middle">
                <div className="middle-top">
                    <p>0.49081WETH <SyncAlt className="middle-top-icon" fontSize='small' /> 879USDT</p>
                    <span>Tokennion-6min ago</span>
                </div>
                <div className="middle-bottom"></div>
            </div>

            <div className="last">
                <p>{prop.value}$</p>
            </div>
        </div>)
}

export default Swap