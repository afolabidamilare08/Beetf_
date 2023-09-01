import './createETF_index.scss'
import HeaderComponent from "../../components/header_component/header_component";
import ETFcreateIntro from './etf_intro/etf_intro';
import CreateETFBasket from './createETF_basket';
import CreateETFParameters from './createETF_parameters';
import DeployETF from './deployETF';

const CreateEFTIndex = () => {

    return(

        <>

        <HeaderComponent/>


        <div className='create_etf' >


            <div className="create_etf_top_navigation" >

                <div className='create_etf_top_navigation_div' style={{color:"white"}} >
                    Intro
                </div>

                <div className='create_etf_top_navigation_div' >
                    Baskets
                </div>

                <div className='create_etf_top_navigation_div' >
                    Parameters
                </div>

                <div className='create_etf_top_navigation_div' >
                    Deploy Tx
                </div>
{/* 
                <div className='create_etf_top_navigation_div' >
                    Governance Setup
                </div>

                <div className='create_etf_top_navigation_div' >
                    Governance Tx
                </div> */}

                <div className='create_etf_top_navigation_div' >
                    Done
                </div>

            </div>

            <div className='create_etf_mid' >

                {/* <ETFcreateIntro/> */}

                {/* <CreateETFBasket/> */}

                {/* <CreateETFParameters/> */}

                <DeployETF/>

            </div>

        </div>

        </>

    );

}

export default CreateEFTIndex;