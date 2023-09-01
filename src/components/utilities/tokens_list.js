import { BiCaretDown, BiX } from 'react-icons/bi';
import './token_list.scss';
import { useState } from 'react';



const Loading = () => {

    return(

        <div className="loader"></div>

    );

}


const TokenList = () => {

    const [ Expand, setExpand ] = useState(false)

    return (

        <div className="token_list" >
            
            <div className="token_list_top" >

                <div className="token_list_top_left" >

                    <div className='token_list_top_left_img' ></div>

                    <h6 className='token_list_top_left_txt' >DAI</h6>

                </div>

                <div className="token_list_top_right" >

                    <div className='token_list_top_right_box' ></div>

                    <BiCaretDown className={`token_list_top_right_ic ${ Expand ? ' token_list_top_right_ic_rotate' : '' }`} onClick={ () => setExpand(!Expand) } />

                </div>

            </div>

           { Expand ? <div className='token_list_btm' >

                <div className='token_list_btm_div' >
                    <h6>Reference unit</h6>
                    <h5>DAI</h5>
                </div>

                <div className='token_list_btm_div' >
                    <h6>Collateral token</h6>
                    <h5>DAI</h5>
                </div>

                <div className='token_list_btm_div' >
                    <h6>Decimals</h6>
                    <h5>18</h5>
                </div>

            </div> : <></> }
            
        </div>

    );

}

const TokenVolume = () => {

    return (

        <div className='token_volume' >
            
            <div className='token_volume_left' >
                <div className='token_volume_left_img' ></div>
                <div className='token_volume_left_det' >
                    <h6>USD</h6>
                    <h4>0.3332 in DAI</h4>
                </div>
            </div>

            <div className='token_volume_right' >

                <input type='number' className='token_volume_right_input' />

                <h5>%</h5>

                <BiX className='token_volume_right_ic' />

            </div>

        </div>

    );

}

const TokenVolumeCheckout = () => {

    return (

        <div className='token_volume' >
            
            <div className='token_volume_left' >
                <div className='token_volume_left_img' ></div>
                <div className='token_volume_left_det' >
                    <h6>USD</h6>
                    <h4>0.3332 in DAI</h4>
                </div>
            </div>

            <div className='token_volume_right' >

                <h5>33%</h5>

            </div>

        </div>

    );

}

const LoadingBox = () => {

    return(

        <div className='loadingbox' >

            <Loading/>

            <h5>
                Pending, sign in wallet
            </h5>

            <h6>
                Please sign the transaction in your wallet to continue with the deployment process
            </h6>
            

        </div>

    );

}


export {TokenList,TokenVolume,TokenVolumeCheckout,LoadingBox,Loading};