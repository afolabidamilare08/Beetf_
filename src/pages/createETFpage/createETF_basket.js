import { AiOutlineArrowLeft} from 'react-icons/ai';
import { BiBox, BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {TokenList, TokenVolume} from '../../components/utilities/tokens_list';
import {Backdrop} from '../../components/utilities/backdrop';

const CreateETFBasket = () => {

    return(

        <div className="create_etf_basket" >

            <Link className='create_etf_back' >
                <AiOutlineArrowLeft className='create_etf_back_ic' />  
                Intro 
            </Link>

            <div className='create_etf_intro_top' >

                    <div className='create_etf_intro_top_left' >
                        <h3 className='create_etf_intro_top_left_main' >Define ETF Basket</h3>
                        <h6 className='create_etf_intro_top_left_sub' style={{color:"gray"}} >What will back your ETF? What happens in default scenarios?</h6>
                    </div>

                <button className='create_etf_intro_top_right' disabled={true} >
                    Confirm Basket 
                </button>

            </div>

            <div className='create_etf_basket_main' >

                <div className='create_etf_basket_main_basketBox' >
                    <div className='create_etf_basket_main_tokenBox_top' >ETF Basket</div>

                    <div className='create_etf_basket_main_basketBox_total' >

                        <h5>1 ETF =</h5>

                        <h5>--</h5>

                    </div>

                    <div className='create_etf_basket_main_basketBox_total' >

                        <h5>USD - Basket Scale</h5>

                        <div className='create_etf_basket_main_basketBox_total_right' >

                            <input type='number' className='create_etf_basket_main_basketBox_total_right_input' />

                            <h5>USD</h5>

                        </div>

                    </div>

                    <div className='create_etf_basket_main_basketBox_total' style={{borderBottom:"none"}} >

                        <h6>Basket</h6>

                        <h5>100%</h5>

                    </div>

                    <div className='create_etf_basket_main_basketBox_mid' >

                        {/* <div className='create_etf_basket_main_basketBox_mid_empty' >
                            <BiBox className='create_etf_basket_main_basketBox_mid_empty_ic' />

                            <h4>Empty Basket</h4>

                            <h6>The basket & weights of the collateral for your ETF will populate here.</h6>
                        </div> */}

                        <TokenVolume/>
                        <TokenVolume/>
                        <TokenVolume/>
                        <TokenVolume/>
                        <TokenVolume/>
                        <TokenVolume/>
                        <TokenVolume/>
                        <TokenVolume/>
                        <TokenVolume/>
                        <TokenVolume/>

                    </div>

                </div>

            </div>

            <div className='create_etf_basket_floating' >
                <BiPlus className='create_etf_basket_floating_ic' />
                Add Token
            </div>

            {/* <div className='create_etf_basket_main_tokenBox' >

            <div className='create_etf_basket_main_tokenBox_top' >Tokens</div>

                <div className='create_etf_basket_main_tokenBox_mid' >
                    <TokenList/>
                    <TokenList/>
                    <TokenList/>
                    <TokenList/>
                    <TokenList/>
                    <TokenList/>
                    <TokenList/>
                    <TokenList/>
                </div>

                <div className='create_etf_basket_main_tokenBox_btm' >
                    <button className='create_etf_basket_main_tokenBox_btm_btn' >
                        Add to basket
                    </button>
                </div>

            </div> */}

            {/* <Backdrop
                
            /> */}

        </div>

    );

}

export default CreateETFBasket;