import React from 'react'
import Detail from './Facultydetail.js'
import './Faculty.css'
const Faculty = () => {
    return (
        <div className='faculty'>
            <div className="fheading">FACULTY COORDINATORS</div>
            <div className="facultycontainer">
                <div className="facultybox">
                    <div className="img">
                        <img className='vikasdir' src='/images/Vikassaxena-dir.jpg' alt="" />
                    </div>
                    <div className="position">PROF. VIKAS SAXENA</div>
                    <div className="price">DIRECTOR AND HEAD (CSE & IT)</div>
                </div>
                <div className="facultybox">
                    <div className="img">
                        <img className='vikasdir' src='/images/CS Ankita.jpeg' alt="" />
                    </div>
                    <div className="position">PROF. ANKITA WADHWA</div>
                    <div className="price">FACULTY COORDINATOR (OSDC)</div>
                </div>
                {
                    Detail.map((item, index) => (
                        <div className="facultybox" key={index}>
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="position">{item.name}</div>
                            <div className="price">{item.role}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Faculty
