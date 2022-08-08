import React from 'react'

const SideBarItem = (prop) => {
    const Component = prop.icon;

    return (
        <div className="SideBar-Option">
            <Component className="SideBar-Option-Icon" fontSize="large" />
            <p className="SideBar-Option-name">{prop.name}</p>
        </div>
    )
}

export default SideBarItem