import { AiOutlineArrowLeft} from 'react-icons/ai';
import { BiBox, BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {Loading, LoadingBox, TokenList, TokenVolume, TokenVolumeCheckout} from '../../components/utilities/tokens_list';
import {Backdrop} from '../../components/utilities/backdrop';

const DeployETF = () => {

    return(

        <div className="create_etf_deploy" >

            <Link className='create_etf_back' >
                <AiOutlineArrowLeft className='create_etf_back_ic' />  
                Parameters 
            </Link>

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
                    <button className='create_etf_intro_top_right' >
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
                        <h6>Dami's ETF</h6>
                    </div>

                    <div className='create_etf_deploy_mid_part_det' >
                        <h5>ETF symbol</h5>
                        <h6>DTF</h6>
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
                        <h5>1 USD </h5>

                    </div>

                    <div>

                        <TokenVolumeCheckout/>
                        <TokenVolumeCheckout/>
                        <TokenVolumeCheckout/>
                        <TokenVolumeCheckout/>

                    </div>

                </div>

            </div>
            
            {/* <div style={{
                
            }} >
                <Loading/>
            </div> */}

            {/* <LoadingBox/> */}

        </div>

    );

}

export default DeployETF;