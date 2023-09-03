import { AiOutlineArrowLeft} from 'react-icons/ai';
import { BiBox, BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {Loading, LoadingBox, TokenList, TokenVolume, TokenVolumeCheckout, TokenVolumeCheckout2} from '../../components/utilities/tokens_list';
import {Backdrop} from '../../components/utilities/backdrop';
import { useEffect, useState } from 'react';
import HeaderComponent from '../../components/header_component/header_component';

const DeployETF = ( ) => {


    return(

        <>
        <HeaderComponent/>


        <div className='create_etf' >

            <div className='create_etf_mid' >

                <div className="create_etf_deploy" >
                    <LoadingBox/>   
                </div>

        </div>
        </div>
        </>

    );

}

export default DeployETF;