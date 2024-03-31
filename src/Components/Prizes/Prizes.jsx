import React from 'react'
import './Prizes.css'
import Detail from './Prizedetail'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Prizes = () => {
    return (
        <div className='prize'>
            <div className="heading">PRIZES</div>
            <Carousel responsive={responsive}>
                {
                    Detail.Winningprizes.map((item, index) => (
                        <div className="prizebox" key={index}>
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="position">{item.position}</div>
                            <div className="price">{item.price}</div>
                        </div>
                    ))
                }
            </Carousel>

            <div className="prizedistribution">TRACK PRIZES</div>

            <Carousel responsive={responsive}>
                {
                    Detail.Trackprizes.map((item, index) => (
                        <div className="prizebox" key={index}>
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="position">{item.position}</div>
                            <div className="price">{item.price}</div>
                        </div>
                    ))
                }
            </Carousel>

            <div className="prizedistribution">OTHER EVENTS PRIZES</div>

            <Carousel responsive={responsive}>
                {
                    Detail.Otherevents.map((item, index) => (
                        <div className="prizebox" key={index}>
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="position">{item.position}</div>
                            <div className="price">{item.price}</div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Prizes
