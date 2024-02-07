import React,{useEffect} from "react";
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiClipboardList } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

import './main.css'
import './main.scss'

const Main = ()=> {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  
    const Data=[
        {
        id:1,
        imgSrc:img1,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'The island of Bora Bora is an archipelagic region in the South Pacific. It consists of...', 
        },
        {
            id:2,
            imgSrc:img2,
            destTitle:'Machu Pichu',
            location:'Peru',
            grade:'CULTURAL RELAX',
            fees:'$600',
            description:'Huyanna pichu is a mountine in peru rising over machu pichu. Machu pichu is the highest peak in peru and the highest mountain in the world.', 
            },
            
        
       
        {
            id:3,
            imgSrc:img3,
            destTitle:'Grate Barrier Reef',
            location:'Australia',
            grade:'CULTURAL RELAX',
            fees:'$700',
            description:'Oneof the most remarkable Australia natural gifts is the Great Barrier Reef.The hallmark of this place is lavise and beauty. always intresting to be in this place', 
            },
            {
                id:4,
                imgSrc:img4,
                destTitle:'Cappadocia',
                location:'Turkey',
                grade:'CULTURAL RELAX',
                fees:'$800',
                description:'Accroding to the world Tourisum Ranking, 45 Million people visit turkey each year and from the about 2 million come to visit Cappadocia.This place is known for its luxurious stays and advanturus activities.',  
                },
                {
                    id:5,
                    imgSrc:img5,
                    destTitle:'Guanajuato',
                    location:'Mexico',
                    grade:'CULTURAL RELAX',
                    fees:'$1100',
                    description:'A city in Central Mexico ,Guanajuato is known for his history of silver mining and colonial architecture. The houses in this city are known for their architectural beauty.',  
                    },
                    {
                        id:6,
                        imgSrc:img6,
                        destTitle:'Cinque Terre',
                        location:'Italy',
                        grade:'CULTURAL RELAX',
                        fees:'$840',
                        description:'Cinque Terre is one of the most beautiful cities in Italy. The city is located in the Val di Fiemme region of Tuscany. The city is surrounded by the Alps. The city is located in the Val di Fiemme region of Tuscany. The city is surrounded by the Alps. The city is located in the Val di Fiemme region of Tuscany. The city is surrounded by the Alps.',  
                        },
                        {
                            id:7,
                            imgSrc:img7,
                            destTitle:'Angkor Wat',
                            location:'Cambodia',
                            grade:'CULTURAL RELAX',
                            fees:'$790',
                            description:'Angkor Wat is one of the most beautiful cities in Cambodia. The city is located in the Val di Fiemme region of Tuscany. The city is surrounded by the Alps. The city is located in the Val di Fiemme region of Tuscany.',  
                            },
                            {
                                id:8,
                                imgSrc:img8,
                                destTitle:'Taj Mahal',
                                location:'India',
                                grade:'CULTURAL RELAX',
                                fees:'$900',
                                description:'An Immense mausoleum white marble, built-In agra by Mughal emperor shah jahah in memory of his wife Muntaz.the moument is breathtakingly beautiful. This place is luxurious stays and advanturus activities.',  
                                },
                                {
                                    id:9,
                                    imgSrc:img9,
                                    destTitle:'Bali Island',
                                    location:'Indonesia',
                                    grade:'CULTURAL RELAX',
                                    fees:'$500',
                                    description:'Balis is an Indonesia Island and one of the best holiday destinations in the indonesa archipelagic.Bali is known for its volcanic mounitains, history,art and culture,food,temples and beautiful sandy beaches .',  
                                    },
]


    return(
        <section className="main container section ">
            <div className="secTitle">
                <h3 data-aos="fade-left" className="title">Most Visited destinations</h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                        return(
                                <div key={id} data-aos="fade-up" className="singleDestination">
                                    <div className="imageDiv">
                                        <img src={imgSrc} alt={destTitle}/>
                                        </div>
                                        <div className="cardInfo">
                                            <h4 className="destTitle">{destTitle}</h4>
                                            <span className="containt flex">
                                                <HiOutlineLocationMarker className="icon"/>
                                                <span className="name">{location}</span>
                                            </span>
                                            <span className="location">{location}</span>
                                            <div className="fees flex">
                                                <div className="grade">
                                                    <span>{grade}<small>+1</small></span>
                                                    </div>
                                                    <div className="price">
                                                        <h5>{fees}</h5>
                                                        </div>
                                                </div>
                                                <div className="desc">
                                                    <p>{description}</p>
                                                    </div>
                                                    <button className="btn flex">
                                                        Details <HiClipboardList className="icon"/>
                                                    </button>
                                            </div>

                                    </div>
                        )
                    })
                }

            </div>

        </section>
    )
}
export default Main