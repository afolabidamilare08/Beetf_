import LandingPageHeader from '../../components/header_component/landingPageHeader';
import './landingPage.scss';
import GifImage from '../../images/ezgif.com-resize.gif';
import GifVideo from '../../images/animation_lm02k785.mp4';
import GifVideo2 from '../../images/animation_lm02hpex.mp4';
import {BsTwitter,BsDiscord} from 'react-icons/bs';
import {HiMiniDocumentText} from 'react-icons/hi2';
import {FiChevronRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import Aos from 'aos';

const LandingPage = () => {

    useEffect( () => {
        Aos.init()
    }, [] )

    const [showMain,setshowMain] = useState(false)
    const [showRight,setshowRight] = useState(false)
    const [showMini,setshowMini] = useState(false)
    const [showLinks,setshowLinks] = useState(false)

    setTimeout(() => {
        setshowMain(true)
    }, 4000);

    setTimeout(() => {
        setshowRight(true)
    }, 6000);

    setTimeout(() => {
        setshowMini(true)
    }, 8000);

    setTimeout(() => {
        setshowLinks(true)
    }, 10000);

    return(

        <div className='landing_page' >

            <LandingPageHeader/>

            <div className='landing_page_main' style={{
                // paddingRight:"20rem"
            }} >

                <div className='landing_page_main_det' >

                    <h6 className='landing_page_main_det_mini' data-aos="fade-down" >Made for liquidty-seeking on-chain entities</h6>

                    { showMain ? <div className='landing_page_main_det_main' data-aos="fade-up" >
                        Buy, Sell, and Create ETF with ease. All in one stop.
                    </div>  : <></> }

                    <video data-aos="zoom-out" src={GifVideo}  autoPlay={true} loop={true} muted='muted' className='landing_page_main_vid2' >
                    </video>

                    { showMini ?
                    
                    <div className='landing_page_main_det_special' data-aos="fade-up" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam in justo enim. Integer ac justo eget nisl dictum scelerisque 
                        a at arcu. Fusce vel ligula sed ipsum accumsan tristique.
                    </div>

                    : <></> }

                    { showLinks ?
                    
                    <div className='links_main' style={{ display:'flex', alignItems:"center" }}  >
                        <div className='landing_page_main_det_links' >  

                            <Link className='landing_page_main_det_links_a'  >
                                <BsTwitter className='landing_page_main_det_links_a_ic' />
                            </Link>

                            <Link className='landing_page_main_det_links_a' >
                                <BsDiscord className='landing_page_main_det_links_a_ic' />
                            </Link>

                            <Link className='landing_page_main_det_links_a' >
                                <HiMiniDocumentText className='landing_page_main_det_links_a_ic' />
                            </Link>

                        </div>

                        <button className='landingheader_btns_transparent live_up' style={{marginLeft:'2rem'}} >
                            Lunch App
                            <FiChevronRight style={{marginLeft:'1rem'}} />
                        </button>

                    </div>

                    : <></> }

                </div>

                {/* <img className='landing_page_main_det' src={GifImage} /> */}

                { showRight ?
                
                <video data-aos="zoom-out" src={GifVideo}  autoPlay={true} loop={true} muted='muted' className='landing_page_main_vid' >
                </video>

                : <></> }

            </div>

        </div>

    );

}

export default LandingPage;