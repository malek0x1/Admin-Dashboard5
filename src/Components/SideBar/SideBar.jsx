import { AccountBalanceOutlined, AdUnitsOutlined, PersonOutline, Settings, SettingsOutlined, SpeedOutlined, StorefrontOutlined } from '@mui/icons-material'
import React from 'react'
import './SideBar.css'
import SideBarItem from './SideBarItem'
const SideBar = () => {
    return (
        <div className="SideBar">
            <div className="Logo">Malek0x1</div>
            <div className="SideBar-Options">
                <SideBarItem icon={SpeedOutlined} name='Home' />
                <SideBarItem icon={PersonOutline} name='Account' />
                <SideBarItem icon={AccountBalanceOutlined} name='Wallet' />
                <SideBarItem icon={SpeedOutlined} name='Buy' />
                <SideBarItem icon={StorefrontOutlined} name='Markets' />
                <SideBarItem icon={SettingsOutlined} name='Settings' />
                <SideBarItem icon={AdUnitsOutlined} name='Ads' />
            </div>
        </div>
    )
}

export default SideBar