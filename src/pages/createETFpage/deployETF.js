import { AiOutlineArrowLeft} from 'react-icons/ai';
import { BiBox, BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {Loading, LoadingBox, TokenList, TokenVolume, TokenVolumeCheckout, TokenVolumeCheckout2} from '../../components/utilities/tokens_list';
import {Backdrop} from '../../components/utilities/backdrop';
import { useEffect, useState } from 'react';

const DeployETF = ({proccedToNextPage,proccedToPreviousPage,Parameters,Basket}) => {

    useEffect( () => {

        if ( !Parameters || !Basket ) {
            proccedToNextPage()
        }

    }, [Parameters,Basket] )

    const [ Loading, setLoading ] = useState(false)

    return(

        <div className="create_etf_deploy" >

            { !Loading ?
            
            <>
            
            {/* <Link className='create_etf_back' to={"#"} onClick={ proccedToPreviousPage } >
                <AiOutlineArrowLeft className='create_etf_back_ic' />  
                Parameters 
            </Link> */}

            <div className='create_etf_intro_top' >

                    <div className='create_etf_intro_top_left' >
                        <h3 className='create_etf_intro_top_left_main' >ETF Summary</h3>
                        <h6 className='create_etf_intro_top_left_sub' style={{color:"gray"}} >
                            Confirm that your ETF configuration is as you intended.
                        </h6>
                    </div>

                <div style={{
                    display:"flex",
                    flexDirection:"column"
                }} >
                    <button className='create_etf_intro_top_right' onClick={ () => setLoading(true) } >
                        Deploy ETF 
                    </button>
                    <h6 className='create_etf_intro_top_left_sub' style={{color:"gray",marginTop:'.5rem'}} >
                        Estimated gas cost: <span style={{color:"white"}} >$0.01</span>.
                    </h6>
                </div>

            </div>

            <div className="create_etf_deploy_mid" >

                <div className='create_etf_deploy_mid_part' >

                    <div className='create_etf_deploy_mid_part_top' >
                        Base Info
                    </div>

                    <div className='create_etf_deploy_mid_part_det' >
                        <h5>ETF name</h5>
                        <h6>{ Parameters ? Parameters.Etf_name : '' }</h6>
                    </div>

                    <div className='create_etf_deploy_mid_part_det' >
                        <h5>ETF symbol</h5>
                        <h6>{ Parameters ? Parameters.Etf_symbol : '' }</h6>
                    </div>

                    <div className='create_etf_deploy_mid_part_det' >
                        <h5>Ownership address</h5>
                        <h6>0x4gt45gdgd6353xcxd3636xfxvt</h6>
                    </div>

                </div>

                <div className='create_etf_deploy_mid_part' >
                    <div className='create_etf_deploy_mid_part_top' >
                        Primary Basket
                    </div>

                    <div className='create_etf_deploy_mid_part_mV' >
                        
                        <h5>1 ETF = </h5>
                        <h5>{ Basket ? Basket.Price : '' } USD </h5>

                    </div>

                    <div>

                        { Basket ?
                        
                            Basket.selectedCoins.length > 0 ?
                            
                                Basket.selectedCoins.map( (coin,index) => {
                                    return <TokenVolumeCheckout2
                                        amountInUsd={ Basket.Price * coin.percentage / 100 }
                                        key={index}
                                        coin={coin.coin_name}
                                        percentage={coin.percentage}
                                    />
                                } )
                            
                            : <></>
                        
                        : <></> }

                    </div>

                    <div className='tradePage_mid_form_div' style={{
                        marginTop:'3rem'
                    }} >
                        <div className='tradePage_mid_form_select_label' style={{
                            fontSize:".9rem"
                        }} >Issuer buy and sell fee</div>
                        <div className='tradePage_mid_form_div_nxt' >
                            <input type='text' placeholder='0' style={{
                                padding:'.5rem',
                                width:'25%'
                            }} />
                            USD
                        </div>
                    </div>

                </div>

        </div>

            
            </>
            
            : 
            
                <LoadingBox/>
            }    


        </div>

    );

}

export default DeployETF;