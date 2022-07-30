import { AccountBalanceOutlined, AdUnitsOutlined, PersonOutline, Settings, SettingsOutlined, SpeedOutlined, StorefrontOutlined } from '@mui/icons-material'
import React from 'react'
import './SideBar.css'
const SideBar = () => {
    return (
        <div className="SideBar">
            <div className="Logo">Malek0x1</div>
            <div className="SideBar-Options">
                
                <div className="SideBar-Option">
                    <SpeedOutlined className="SideBar-Option-Icon" fontSize="large"/>
                    <p className="SideBar-Option-name">Home</p>
                </div>
                <div className="SideBar-Option">
                    <PersonOutline className="SideBar-Option-Icon" fontSize="large"/>
                    <p className="SideBar-Option-name">Account</p>
                </div>
                <div className="SideBar-Option">
                    <AccountBalanceOutlined className="SideBar-Option-Icon" fontSize="large"/>
                    <p className="SideBar-Option-name">Wallet</p>
                </div>
                <div className="SideBar-Option">
                    <SpeedOutlined className="SideBar-Option-Icon" fontSize="large"/>
                    <p className="SideBar-Option-name">Buy</p>
                </div>
                <div className="SideBar-Option">
                    <StorefrontOutlined className="SideBar-Option-Icon" fontSize="large"/>
                    <p className="SideBar-Option-name">Markets</p>
                </div>
                <div className="SideBar-Option">
                    <SettingsOutlined className="SideBar-Option-Icon" fontSize="large"/>
                    <p className="SideBar-Option-name">Settings</p>
                </div>
                <div className="SideBar-Option">
                    <AdUnitsOutlined className="SideBar-Option-Icon" fontSize="large"/>
                    <p className="SideBar-Option-name">Ads</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar