import { useState } from 'react';
import './landingPageHeader.scss';
import {FiChevronRight} from 'react-icons/fi';
import {BsTwitter,BsGithub} from 'react-icons/bs';
import {HiMiniDocumentText} from 'react-icons/hi2';
import Logo from '../../images/blackLogo.png';
import { Link } from 'react-router-dom';


const LandingPageHeader = ({location}) => {

    const [ Open_net, setOpen_net ] = useState(false)

    return (

        <header className='landingheader' >
            
            <Link to='/' className='landingheader_logo'>
                <img src={Logo} alt='logo' className='landingheader_logo_img' />
            </Link>

            <div className='landingheader_center' >
                
                <Link to='/' className='landingheader_center_link' >
                    <BsTwitter className='landingheader_center_link_ic' />
                    Twitter
                </Link>
                <Link to='/etf' className='landingheader_center_link' >
                    <BsGithub className='landingheader_center_link_ic' />
                    Gitbook
                </Link>
                <Link to='trade' className='landingheader_center_link' >
                    <HiMiniDocumentText className='landingheader_center_link_ic' />
                    Docs 
                </Link>

            </div>

            <div className='landingheader_btns' >

                <button className='landingheader_btns_transparent' onClick={ () => setOpen_net(!Open_net) } >
                   Lunch App
                   <FiChevronRight style={{marginLeft:'1rem'}} />
                </button>

            </div>

        </header>

    );

}

export default LandingPageHeader;