import React from 'react'
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
                        <img className='vikasdir' src='/images/prakashsir.jpeg' alt="" />
                    </div>
                    <div className="position">DR. PRAKASH KUMAR</div>
                    <div className="price">FACULTY COORDINATOR (OSDC)</div>
                </div>
                <div className="facultybox">
                    <div className="img">
                        <img className='vikasdir' src='/images/Dr.Manish Kumar Thakur.jpg' alt="" />
                    </div>
                    <div className="position">PROF. MANISH K. THAKUR</div>
                    <div className="price">FACULTY COORDINATOR (OSDC)</div>
                </div>
            </div>
        </div>
    )
}

export default Faculty
