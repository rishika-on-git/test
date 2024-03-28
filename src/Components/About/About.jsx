import './About.css';
import { Link } from 'react-router-dom';
import image from '../../assets/exploreProgramme1.png'

const About = () => {
    return (
        <>
            <div className='aboutsection' id="about">
                <div className="aboutheading">WHAT IS OSDHACK ?</div>
                <div className="aboutcontent">
                    <div className="para">
                    OSDHack’24 will be a hybrid hackathon organized by the Open-Source Developers Community of JIIT, Noida. It will be a three-day event scheduled for 19-21 April 2023, which will entail the main hacking event. It will be a 48-hour long congregation of like-minded hackers and tech enthusiasts where participants will brainstorm and build on their ideas. 
                    </div>
                    {/* <div className="para">
                    The online hackathon, organized in partnership with Unstop, is expected to draw over 450 participants from across India, representing prestigious institutions such as IITs, IIITs, NITs, VIT, TIET, LNMIIT, IGDTUW, and more. Meanwhile, the offline hackathon, managed by the Open-Source Developers Community (OSDC) of Jaypee Institute of Information Technology (JIIT), Noida, will provide an eagerly awaited opportunity for tech enthusiasts and hackers to showcase their skills. 
                    </div> */}
                    <div className="para">
                    During the hackathon's 48-hour duration, participants will engage in brainstorming sessions and work on innovative projects. The offline version anticipates the participation of over 500 students and 90 teams, while the online counterpart expects 400+ students and 90+ teams. Notable dignitaries, including Vice Chancellor Prof. B.R. Mehta, HOD (CSE&IT) Prof. Vikas Saxena, and Faculty Coordinator-OSDC Prof. Manish Kumar Thakur, will grace the opening ceremony with their presence.
                    </div>

                    <div className="register">
                        <a href='' className='registertext'>Register Now</a>
                    </div>
                </div>
                <div className="aboutimages">
                    <div className="image">
                        <img src={image} alt="image" />
                    </div>
                    <div className="image rightanimation">
                        <img src={image} alt="image" />
                    </div>
                    <div className="image">
                        <img src={image} alt="image" />
                    </div>
                    <div className="image rightanimation">
                        <img src={image} alt="image" />
                    </div>
                </div>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </>
    )
}

export default About;