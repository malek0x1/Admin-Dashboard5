import React from 'react'

const RightBarTotalItem = (prop) => {
    const Componentx = prop.icon;
    return (
        <div className="RightBar-total">
            <div className={`RightBar-total-icon ${prop.color} `}>
                <Componentx className={`RightBar-total-icon-color ${prop.color}`} fontSize='large' />
            </div>
            <div className="RightBar-total-info">
                <p>{prop.title}</p>
                <h3>{prop.price}</h3>
            </div>
        </div>)
}

export default RightBarTotalItem