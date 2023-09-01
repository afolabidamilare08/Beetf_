import { useState } from 'react';
import './swapPage.scss';
import {FiChevronDown, FiChevronRight ,FiX, } from 'react-icons/fi';
import { BiGasPump } from 'react-icons/bi';
import { TokenVolumeCheckout } from '../../components/utilities/tokens_list';
import HeaderComponent from '../../components/header_component/header_component';


const TradePage = () => {

    const [ Switch, setSwitch ] = useState(true)
    const [ openEtfModal, setopenEtfModal ] = useState(false)

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
                            Dami ETF
                            <FiChevronDown className='tradePage_mid_form_select_ic' />
                        </button>
                        <div className='tradePage_mid_form_select_modal' style={{
                            display: openEtfModal ? 'block' :'none'
                        }} >
                            <div className='tradePage_mid_form_select_modal_top' >
                                <input type='text' placeholder='Search ETFs' />
                                <FiX className='tradePage_mid_form_select_modal_top_ic' onClick={ () => setopenEtfModal(false) }  />
                            </div>
                            <div className='tradePage_mid_form_select_modal_main' >
                                <div className='tradePage_mid_form_select_modal_main_list' >
                                    Dami ETF
                                    <FiChevronRight className='tradePage_mid_form_select_modal_main_list_ic' />
                                </div>
                                <div className='tradePage_mid_form_select_modal_main_list' >
                                    Dami ETF
                                    <FiChevronRight className='tradePage_mid_form_select_modal_main_list_ic' />
                                </div>
                                <div className='tradePage_mid_form_select_modal_main_list' >
                                    Dami ETF
                                    <FiChevronRight className='tradePage_mid_form_select_modal_main_list_ic' />
                                </div>
                                <div className='tradePage_mid_form_select_modal_main_list' >
                                    Dami ETF
                                    <FiChevronRight className='tradePage_mid_form_select_modal_main_list_ic' />
                                </div>
                                <div className='tradePage_mid_form_select_modal_main_list' >
                                    Dami ETF
                                    <FiChevronRight className='tradePage_mid_form_select_modal_main_list_ic' />
                                </div>
                                <div className='tradePage_mid_form_select_modal_main_list' >
                                    Dami ETF
                                    <FiChevronRight className='tradePage_mid_form_select_modal_main_list_ic' />
                                </div>
                                <div className='tradePage_mid_form_select_modal_main_list' >
                                    Dami ETF
                                    <FiChevronRight className='tradePage_mid_form_select_modal_main_list_ic' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='tradePage_mid_form_div' >
                        <div className='tradePage_mid_form_select_label' >Amount</div>
                        <div className='tradePage_mid_form_div_nxt' >
                            <input type='text' placeholder='0' />
                            USD
                        </div>
                    </div>

                </div>

                <div className='tradePage_mid_form_select_label' style={{ color:'white' }} >ETF Basket Volume</div>

                <TokenVolumeCheckout/>
                <TokenVolumeCheckout/>
                
                <div className='tradePage_mid_btm' >
                    
                    <div className='tradePage_mid_btm_left' >
                        <BiGasPump className='tradePage_mid_btm_left_ic' />
                        Estimated Gas fee
                    </div>

                    <h6>$0.001</h6>

                </div>

                <button className='tradePage_mid_submit' >
                    Buy ETF
                </button>


            </div>

        </div>

        </>

    );

}

export default TradePage;