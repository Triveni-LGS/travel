import React,{useEffect} from "react";
import video from '../../assets/video1.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
import './footer.css'
import './footer.scss'
const Footer = ()=> {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <section className="footer">
            <div className="videoDiv">
            <video src={video} muted autoPlay loop type='video/mp4'></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                <div  data-aos="fade-up" className="text">
                    <small>KEPP IN TOUCH</small>
                     <h2>Travel With Us</h2>
                </div>
                <div className="inputDiv flex">
                    <input  data-aos="fade-up" type="text" placeholder="Enter Email Address"/>
                    <button  data-aos="fade-up" className="btn flex" type="submit">SEND
                    <FiSend className="icon"/>
                    </button>
                     
                </div>
                    </div>
                    <div className="footerCard flex">
                        <div className="footerIntro flex">
                            <div className="logoDiv">
                                <a href="#" className="logo flex">
                                    <h1> 
                                        <MdOutlineTravelExplore className='icon'/>Travel</h1>
                                </a>
                            </div>
                            <div  data-aos="fade-up" className="footerParagraph">
                        Lorem ipsum dolor sit amet is a Latin phrase that translates to 
                        "the pain of an average man." The phrase is used as a placeholder 
                        in web development because it is a common, standard way to fill up
                        a space with text.
                            </div>
                            <div  data-aos="fade-up" className="footerSocials">
                          <AiOutlineTwitter className="icon"/>
                          <FaYoutube className="icon"/>
                          <AiFillInstagram className="icon"/>
                          <FaTripadvisor className="icon"/>
                            </div>

                        </div>
                     <div className="footerLinks grid">
                        {/* group One */}
                     <div  data-aos="fade-up"
                          data-aos-duration="4000"
                     className="linksGroup">
                      <span className="groupTitle"> OUR AGENCY
                      </span> 
                      <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Services
                        </li>  
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Insurence
                        </li>  
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Agency
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Tourism 
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Payment
                        </li>
                     </div>
                          {/* group Two */}
                          <div data-aos="fade-up" 
                          data-aos-duration="4000" className="linksGroup">
                      <span className="groupTitle"> PARTNERS
                      </span> 
                      <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Bookings
                        </li>  
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Rentcars
                        </li>  
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Hotelworld
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Trivago 
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        TripAdvisor
                        </li>
                     </div>
                            {/* group Three */}
                     <div  data-aos="fade-up"
                          ata-aos-duration="5000"
                     className="linksGroup">
                      <span className="groupTitle"> LAST MINUTE
                      </span> 
                      <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Landon
                        </li>  
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        California
                        </li>  
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Indonesia
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Europe 
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Oceania
                        </li>
                     </div>


                     </div>
                     <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHTS RESERVED-ISRATECH 2022</small>
                     </div>
                    
                    </div>
                 
            </div>
            </section>
    )
}
export default Footer