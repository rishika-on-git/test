import React from 'react'
import './Prizes.css'
import Detail from './Prizedetail'

const Prizes = () => {
    return (
        <div className='prize'>
            <div className="heading">PRIZES</div>
            <div className="prizecontainer">
                {
                    Detail.map((item, index) => (
                        <div className="prizebox" key={index}>
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="position">{item.position}</div>
                            <div className="price">{item.price}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Prizes
