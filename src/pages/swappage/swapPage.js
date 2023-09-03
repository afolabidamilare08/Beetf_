import { useState } from 'react';
import './swapPage.scss';
import {FiChevronDown, FiChevronRight ,FiX, } from 'react-icons/fi';
import { BiGasPump } from 'react-icons/bi';
import { TokenVolumeCheckout } from '../../components/utilities/tokens_list';
import HeaderComponent from '../../components/header_component/header_component';


const TradePage = () => {

    const [ Switch, setSwitch ] = useState(true)
    const [ openEtfModal, setopenEtfModal ] = useState(false)
    const [ Amount, setAmount ] = useState('0')

    const [ EtfList, setEtfList ] = useState([
        { etf_name: 'CryptoFund Pro', 
            token: [ 
                {token_name: 'DAI', percentage: 20, }, 
                {token_name: 'BNB', percentage: 80} 
        ] },
        { etf_name: 'DigitalAsset Diversify', 
            token: [ 
                {token_name: 'USDT', percentage: 50, }, 
                {token_name: 'DAI', percentage: 20}, 
                {token_name: 'ETH', percentage: 30}, 
        ] },
        { etf_name: 'Blockchain Wealth Builder', token: [ 
            {token_name: 'ETH', percentage: 70, }, 
            {token_name: 'DAI', percentage: 20}, 
            {token_name: 'USDT', percentage: 10}, 
        ] },
        { etf_name: 'CoinTrust ETF', token: [ 
            {token_name: 'DAI', percentage: 30}, 
            {token_name: 'USDT', percentage: 70}, 
        ]  },
        { etf_name: 'CryptoSmart Portfolio', token: [ 
            {token_name: 'ETH', percentage: 10}, 
            {token_name: 'DAI', percentage: 90}, 
        ] },
    ])

    const [ selectedEtf, setselectedEtf ] = useState(null)

    return (

        <>

        <HeaderComponent/>

        <div className='tradePage' >
            
            <div className='tradePage_mid' >

                <div className='tradePage_mid_top' >
                    Trade
                </div>

                <div className='tradePage_mid_switch' >
                    <button 
                        className={` ${ Switch ? 'tradePage_mid_switch_buy' : 'tradePage_mid_switch_sell' } `} 
                        onClick={ () => setSwitch(true) }
                    >Buy ETF</button>
                    <button 
                        className={` ${ !Switch ? 'tradePage_mid_switch_buy' : 'tradePage_mid_switch_sell' } `} 
                        onClick={ () => setSwitch(false) }
                    >Sell ETF</button>
                </div>

                <div className='tradePage_mid_form' >

                    <div className='tradePage_mid_form_select' >
                        <div className='tradePage_mid_form_select_label' >ETF Name</div>
                        <button onClick={ () => setopenEtfModal(!openEtfModal) } >
                            { selectedEtf ? selectedEtf.etf_name : 'Choose ETF' }
                            <FiChevronDown className='tradePage_mid_form_select_ic' />
                        </button>
                        <div className='tradePage_mid_form_select_modal' style={{
                            display: openEtfModal ? 'block' :'none'
                        }} >
                            {/* <div className='tradePage_mid_form_select_modal_top' >
                                <input type='text' placeholder='Search ETFs' />
                                <FiX className='tradePage_mid_form_select_modal_top_ic' onClick={ () => setopenEtfModal(false) }  />
                            </div> */}
                            <div className='tradePage_mid_form_select_modal_main' >
                                
                                { EtfList.map( (etf,index) => {
                                    return <div className='tradePage_mid_form_select_modal_main_list' onClick={ () => {
                                        setselectedEtf(etf)
                                        setopenEtfModal(false)
                                    } } >
                                                {etf.etf_name}
                                                <FiChevronRight className='tradePage_mid_form_select_modal_main_list_ic' />
                                            </div>
                                } ) }

                            </div>
                        </div>
                    </div>

                    <div className='tradePage_mid_form_div' >
                        <div className='tradePage_mid_form_select_label' >Amount</div>
                        <div className='tradePage_mid_form_div_nxt' >
                            <input type='text' placeholder='0' value={Amount} onChange={ (e) => {
                                setAmount(e.target.value)
                            } } />
                            USD
                        </div>
                    </div>

                </div>

                <div className='tradePage_mid_form_select_label' style={{ color:'white' }} >ETF Basket Volume</div>

                { 
                
                    selectedEtf && Amount !== '' ?
                    
                    
                        selectedEtf.token.map( ( token, index ) => {

                            const TheAmout = parseInt(Amount)
                            // console.log(Amount)
                            var percentagePrice = token.percentage / 100

                            percentagePrice = percentagePrice * TheAmout

                            return <TokenVolumeCheckout
                                        key={index}
                                        coin={token.token_name}
                                        percentage={token.percentage}
                                        amountInUsd={percentagePrice}
                                    />
                        

                        } )

                    :

                    <></>
                
                }
                
                <div className='tradePage_mid_btm' >
                    
                    <div className='tradePage_mid_btm_left' >
                        <BiGasPump className='tradePage_mid_btm_left_ic' />
                        Estimated Gas fee
                    </div>

                    <h6>$0.001</h6>

                </div>

                {/* <div className='tradePage_mid_btm' >
                    
                    <div className='tradePage_mid_btm_left' >
                        <BiGasPump className='tradePage_mid_btm_left_ic' />
                        Estimated Gas fee
                    </div>

                    <h6>$0.001</h6>

                </div> */}

                <button disabled={true} className='tradePage_mid_submit' >
                    {/* Buy ETF */}
                    Coming Soon
                </button>


            </div>

        </div>

        </>

    );

}

export default TradePage;