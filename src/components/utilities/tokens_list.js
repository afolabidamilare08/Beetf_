import { BiCaretDown, BiX } from 'react-icons/bi';
import './token_list.scss';
import { useEffect, useState } from 'react';
import ETHimg from '../../images/eth.png';
import Binance from '../../images/binance.png';
import DAiimg from '../../images/dai.png';
import TetherUSDT from '../../images/tetherUSdt.png';



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

const TokenVolumeCheckout = ({coin,percentage,amountInUsd}) => {

    const [ selectedCoin, setselectedCoin ] = useState(null)
    const [ calPrice, setcalPrice ] = useState(null)

    useEffect( () => {

        const coins =  [
            { coin_name: 'ETH', price: 16312, img: ETHimg },
            { coin_name: 'BNB', price: 214, img: Binance },
            { coin_name: 'DAI', price: 1, img: DAiimg },
            { coin_name: 'USDT', price: 1, img: TetherUSDT },
        ]

        console.log(amountInUsd)
        const theCoin = coins.find(name => name.coin_name === coin);
        if ( theCoin ) {
            const price = amountInUsd / theCoin.price
            setcalPrice(price)
        }
        setselectedCoin(theCoin)
    }, [amountInUsd,coin] )

    return (

        <div className='token_volume' >
            
            <div className='token_volume_left' >
                <div className='token_volume_left_img' >
                    <img src={ selectedCoin ? selectedCoin.img : '' } alt='im' style={{width:"100%",height:'100%',borderRadius:'400px'}} />
                </div>
                <div className='token_volume_left_det' >
                    <h6>USD</h6>
                    <h4>{ calPrice ? calPrice : '' } in {selectedCoin ? selectedCoin.coin_name : ''}</h4>
                </div>
            </div>

            <div className='token_volume_right' >

                <h5>{ percentage ? percentage : '' }%</h5>

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