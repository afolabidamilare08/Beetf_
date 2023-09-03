import { BiCaretDown, BiX, BiSolidMegaphone } from 'react-icons/bi';
import './token_list.scss';
import { useEffect, useState } from 'react';
import ETHimg from '../../images/eth.png';
import Binance from '../../images/binance.png';
import DAiimg from '../../images/dai.png';
import TetherUSDT from '../../images/tetherUSdt.png';
import { Link } from 'react-router-dom';



const Loading = () => {

    return(

        <div className="loader"></div>

    );

}


const TokenList = ({
    token_name,
    token_img,
    reference_unit,
    colateral_token,
    decimals,
    ChooseToken,
    Choosen
}) => {

    const [ Expand, setExpand ] = useState(false)

    return (

        <div className="token_list" >
            
            <div className="token_list_top" >

                <div className="token_list_top_left" >

                    <div className='token_list_top_left_img' >
                        <img src={ token_img } alt='im' style={{width:"100%",height:'100%',borderRadius:'400px'}} />
                    </div>

                    <h6 className='token_list_top_left_txt' >{token_name}</h6>

                </div>

                <div className="token_list_top_right" onClick={ ChooseToken } >

                    <div className='token_list_top_right_box' style={{backgroundColor:Choosen}} ></div>

                    <BiCaretDown className={`token_list_top_right_ic ${ Expand ? ' token_list_top_right_ic_rotate' : '' }`} onClick={ () => setExpand(!Expand) } />

                </div>

            </div>

           { Expand ? <div className='token_list_btm' >

                <div className='token_list_btm_div' >
                    <h6>Reference unit</h6>
                    <h5>{reference_unit}</h5>
                </div>

                <div className='token_list_btm_div' >
                    <h6>Collateral token</h6>
                    <h5>{colateral_token}</h5>
                </div>

                <div className='token_list_btm_div' >
                    <h6>Decimals</h6>
                    <h5>{decimals}</h5>
                </div>

            </div> : <></> }
            
        </div>

    );

}

const TokenVolume = ({token_name,token_percentage,Change_token_percentage,coin_img,removeToken,price}) => {

    return (

        <div className='token_volume' >
            
            <div className='token_volume_left' >
                <div className='token_volume_left_img' >
                    <img src={coin_img} alt='im' style={{width:"100%",height:'100%',borderRadius:'400px'}} />
                </div>
                <div className='token_volume_left_det' >
                    <h6>USD</h6>
                    <h4>{price} in {token_name}</h4>
                </div>
            </div>

            <div className='token_volume_right' >

                <input type='number' className='token_volume_right_input' value={token_percentage} onChange={ Change_token_percentage } />

                <h5>%</h5>

                <BiX className='token_volume_right_ic' onClick={ removeToken } />

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




const TokenVolumeCheckout2 = ({coin,percentage,amountInUsd}) => {

    const [ selectedCoin, setselectedCoin ] = useState(null)
    const [ calPrice, setcalPrice ] = useState(null)


    useEffect( () => {

        const coins =  [
            { coin_name: 'ETH', price: 16312, img: ETHimg },
            { coin_name: 'BNB', price: 214, img: Binance },
            { coin_name: 'DAI', price: 1, img: DAiimg },
            { coin_name: 'USDT', price: 1, img: TetherUSDT },
        ]
        const theCoin = coins.find(name => name.coin_name === coin);
        if ( theCoin ) {
            const price = amountInUsd / theCoin.price
            setcalPrice(price)
        }
        setselectedCoin(theCoin)
    }, [coin,amountInUsd] )

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

const TokenETFList = ({coin}) => {

    const [ selectedCoin, setselectedCoin ] = useState(null)

    useEffect( () => {

        // console.log(coin)
        const coins =  [
            { coin_name: 'ETH', price: 16312, img: ETHimg },
            { coin_name: 'BNB', price: 214, img: Binance },
            { coin_name: 'DAI', price: 1, img: DAiimg },
            { coin_name: 'USDT', price: 1, img: TetherUSDT },
        ]
        const theCoin = coins.find(name => name.coin_name === coin);
        setselectedCoin(theCoin)
    }, [coin] )

    return (
            <div className='token_volume_left_img' style={{
                border:"none"
            }} >
                <img src={ selectedCoin ? selectedCoin.img : '' } alt='im' style={{width:"100%",height:'100%',borderRadius:'400px'}} />
            </div>

    );

}


const LoadingBox = () => {

    return(

        <div className='loadingbox' >

            {/* <Loading/> */}

            <BiSolidMegaphone style={{
                color:'white',
                width:'2rem',
                height:'2rem'
            }} />

            <h5>
                Coming soon
            </h5>

            <h6>
                This feature would be coming soon.
            </h6>

            <Link to='/etf' >
                Go to ETF list Page
            </Link>
            

        </div>

    );

}


export {TokenList,TokenVolume,TokenVolumeCheckout,LoadingBox,Loading,TokenETFList,TokenVolumeCheckout2};