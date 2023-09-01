import { AiOutlineArrowLeft} from 'react-icons/ai';
import { BiBox, BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {TokenList, TokenVolume} from '../../components/utilities/tokens_list';
import {Backdrop} from '../../components/utilities/backdrop';

const CreateETFParameters = () => {

    return(

        <div className="create_etf_parameters" >

            <Link className='create_etf_back' >
                <AiOutlineArrowLeft className='create_etf_back_ic' />  
                Basket 
            </Link>

            <div className='create_etf_intro_top' >

                    <div className='create_etf_intro_top_left' >
                        <h3 className='create_etf_intro_top_left_main' >Define ETF Parameters</h3>
                        <h6 className='create_etf_intro_top_left_sub' style={{color:"gray"}} >
                            Name your token and define does your ETF should operate.
                        </h6>
                    </div>

                <button className='create_etf_intro_top_right' disabled={true} >
                    Confirm parameters 
                </button>

            </div>

            <div className='create_etf_parameters_div' >

                <h5 className='create_etf_parameters_div_label' >ETF name</h5>
                <input type='text' placeholder='Input ETF name' className='create_etf_parameters_div_input' />

            </div>

            <div className='create_etf_parameters_div' >

                <h5 className='create_etf_parameters_div_label' >ETF symbol</h5>
                <input type='text' placeholder='Input symbol' className='create_etf_parameters_div_input' />

            </div>

            <div className='create_etf_parameters_div' >

                <h5 className='create_etf_parameters_div_label' >Ownership address</h5>
                <input type='text' placeholder='Ownership address' className='create_etf_parameters_div_input diabled_input'  />

            </div>
            
        </div>

    );

}

export default CreateETFParameters;