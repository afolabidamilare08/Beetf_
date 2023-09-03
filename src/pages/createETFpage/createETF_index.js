import './createETF_index.scss'
import HeaderComponent from "../../components/header_component/header_component";
import ETFcreateIntro from './etf_intro/etf_intro';
import CreateETFBasket from './createETF_basket';
import CreateETFParameters from './createETF_parameters';
import DeployETF from './deployETF';
import { useState } from 'react';

const CreateEFTIndex = () => {

    const [ pageNumber, setpageNumber ] = useState(1)

    const [ BasketDetail, setBasketDetail ] = useState(null)

    const [ Parameters, setParameters ] = useState(null)

    return(

        <>

        <HeaderComponent/>


        <div className='create_etf' >


            <div className="create_etf_top_navigation" >

                <div className='create_etf_top_navigation_div' style={{color: pageNumber === 1  ? "white" : 'green' }} >
                    Intro
                </div>

                <div className='create_etf_top_navigation_div' style={{color: pageNumber > 2  ? "green" : 'white' }} >
                    Baskets
                </div>

                <div className='create_etf_top_navigation_div' style={{color: pageNumber > 3  ? "green" : 'white' }} >
                    Parameters
                </div>

                <div className='create_etf_top_navigation_div'  style={{color: pageNumber === 4  ? "green" : 'white' }} >
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

                { pageNumber === 1 ?
                    
                    <ETFcreateIntro
                        proccedToNextPage={ () => setpageNumber(2) }
                    />

                    : <></>
            
                }

                { pageNumber === 2 ?
                
                    <CreateETFBasket
                        proccedToNextPage={ () => setpageNumber(3) }
                        proccedToPreviousPage={ () => setpageNumber(1) }
                        saveInfo={ (data) => setBasketDetail(data) }
                        // Info={ BasketDetail }
                    />
                
                : <></> }

                { pageNumber === 3 ?
                
                    <CreateETFParameters
                        proccedToNextPage={ () => setpageNumber(4) }
                        proccedToPreviousPage={ () => setpageNumber(2) }
                        sendData={ (data) => setParameters(data)  }
                    />
                
                : <></> }

                { pageNumber === 4 ?
                
                    <DeployETF
                        proccedToPreviousPage={ () => setpageNumber(3) }
                        Parameters={Parameters}
                        Basket={BasketDetail}
                    />
                
                : <></> }

            </div>

        </div>

        </>

    );

}

export default CreateEFTIndex;