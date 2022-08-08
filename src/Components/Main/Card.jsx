import React from 'react'

const Card = (prop) => {
    return (
        <div className={`Main-Body-Card  ${prop.color}`}>
            <div className="Card-Header">
                <h2 className={`crypto-name ${prop.color}-name`}>{prop.name}</h2>
                <div className={`percentage ${prop.color}-per`}>{prop.percentage}%</div>
            </div>
            <span className={`${prop.color}-span`}>{prop.convertTo}</span>
            <div className="glutch"></div>
            <img src={prop.src} className="img-graph" alt="" draggable={false} />
            <h2 className="price-h2">${prop.price}</h2>
            <p className="p-do-u-know">30% of your portfolio</p>
        </div>)
}

export default Card