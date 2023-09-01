import './withdrawal_component.scss';
import { SiBinance } from 'react-icons/si';
import {FiChevronDown} from 'react-icons/fi';


const WithdrawalComponent = () => {

    return (

        <div className='midBox' >

            <h4 className='midBox_title' > Withdraw </h4>

            <h6 className='midBox_sub_title' >Transfer BNB from your opBNB Mainnet account to BNB Smart Chain Mainnet.</h6>

            <div className='midBox_frm' >

                <div className='midBox_frm_top' >
                    <span className='midBox_frm_top_left' >From</span>
                    <div>

                    </div>
                    <span className='midBox_frm_top_right' >Bridgooor Mainnet</span>
                </div>

                <div className='midBox_frm_btm' >

                    <span className='midBox_frm_btm_amount' >Amount</span>

                    <div className='midBox_frm_btm_input' >
                        <input className='midBox_frm_btm_input_input' placeholder='0' /> 
                        <button className='midBox_frm_btm_input_btn' >
                            <SiBinance className='midBox_frm_btm_input_btn_ic' />
                            BNB
                            <FiChevronDown className='midBox_frm_btm_input_btn_down' />
                            <div className='midBox_frm_btm_input_btn_modal' >
                                <SiBinance className='midBox_frm_btm_input_btn_modal_ic' />
                                BNB
                            </div>
                        </button>
                    </div>

                    <span className='midBox_frm_btm_balance' >
                        Balance: 0 BRG
                    </span>

                </div>

            </div>

        </div>

    );

}


export default WithdrawalComponent;