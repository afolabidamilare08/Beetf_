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

    const [Top,setTop] = useState(false)
    const [showMain,setshowMain] = useState(false)
    const [showRight,setshowRight] = useState(false)
    const [showMini,setshowMini] = useState(false)
    const [showLinks,setshowLinks] = useState(false)

    setTimeout(() => {
        setTop(true)
    }, 1000);

    setTimeout(() => {
        setshowMain(true)
    }, 2000);

    setTimeout(() => {
        setshowRight(true)
    }, 3000);

    setTimeout(() => {
        setshowMini(true)
    }, 4000);

    setTimeout(() => {
        setshowLinks(true)
    }, 5000);

    return(

        <div className='landing_page' >

            <LandingPageHeader/>

            <div className='landing_page_main' style={{
                // paddingRight:"20rem"
            }} >

                <div className='landing_page_main_det' >

                    { Top ? 
                    
                    <h6 className='landing_page_main_det_mini' data-aos="fade-down" >A DeFi market protocol for issuing and trading ETFs on the base network.</h6>

                    : <></> }

                    { showMain ? <div className='landing_page_main_det_main' data-aos="fade-up" >
                    Create, Issue and Trade Decentralized ETFs with ease. All in one stop.
                    </div>  : <></> }

                    <video data-aos="zoom-out" src={GifVideo}  autoPlay={true} loop={true} muted='muted' className='landing_page_main_vid2' >
                    </video>

                    { showMini ?
                    
                    <div className='landing_page_main_det_special' data-aos="fade-up" >
                        The launch of BeETF introduces a new, 
                        innovative form of bundling together various erc20 
                        assets to create a customised financial product 
                        while utilizing an insurance backstop and fully 
                        on-chain transparency to protect users.
                        Anybody can then interact directly with the Fund 
                        to be exposed to the price changes in the group of ERC20 tokens.
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

                            <a href='https://beetf.gitbook.io/beetf-dao/' target="_blank" rel="noopener noreferrer" className='landing_page_main_det_links_a' >
                                <HiMiniDocumentText className='landing_page_main_det_links_a_ic' />
                            </a>

                        </div>

                        <Link className='landingheader_btns_transparent live_up' to={'/trade'} style={{marginLeft:'2rem',textDecoration:"none"}} >
                            Launch App
                            <FiChevronRight style={{marginLeft:'1rem'}} />
                        </Link>

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
// bordrr
export default LandingPage;