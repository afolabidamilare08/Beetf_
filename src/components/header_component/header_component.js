import { useState } from 'react';
import './header_component.scss';
import {FiChevronDown} from 'react-icons/fi';
import {IoIosCheckmarkCircle} from 'react-icons/io';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';


const HeaderComponent = ({location}) => {

    const [ Open_net, setOpen_net ] = useState(false)

    return (

        <header className='header' >
            
            <Link to='/' className='header_logo'>
                <img src={Logo} alt='logo' className='header_logo_img' />
            </Link>

            <div className='header_center' >
                
                <Link to='/' className='header_center_link' >Home</Link>
                <Link to='/etf' className='header_center_link' >ETF</Link>
                <Link to='trade' className='header_center_link' >Trade</Link>

            </div>

            <div className='header_btns' >

                <button className='header_btns_transparent' onClick={ () => setOpen_net(!Open_net) } >
                    Connect Wallet
                </button>

            </div>

        </header>

    );

}

export default HeaderComponent;