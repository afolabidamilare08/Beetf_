import { AiOutlineArrowLeft} from 'react-icons/ai';
import { BiBox, BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {TokenList, TokenVolume} from '../../components/utilities/tokens_list';
import {Backdrop} from '../../components/utilities/backdrop';
import ETHimg from '../../images/eth.png';
import Binance from '../../images/binance.png';
import DAiimg from '../../images/dai.png';
import TetherUSDT from '../../images/tetherUSdt.png';
import { useEffect, useState } from 'react';

const CreateETFBasket = ({proccedToNextPage,proccedToPreviousPage,saveInfo,Info}) => {

    const [ mainCoins, setMaincoins ] =  useState([
        { coin_name: 'ETH', price: 16312, img: ETHimg, reference_unit: 'ETH', colateral_token: 'BTC', decimals:12 },
        { coin_name: 'BNB', price: 214, img: Binance, reference_unit: 'BND', colateral_token: 'USDT', decimals:14 },
        { coin_name: 'DAI', price: 1, img: DAiimg, reference_unit: 'DAI', colateral_token: 'USDT', decimals:18 },
        { coin_name: 'USDT', price: 1, img: TetherUSDT, reference_unit: 'USDT', colateral_token: 'USDT', decimals:15 },
    ])

    const [ selectedCoins, setselectedCoins ] = useState([])
    const [ PreselectedCoins, setPreselectedCoins ] = useState([])
    const [ openTokenModal, setopenTokenModal ] = useState(false)
    const [ AmountUSD, setAmountUSD ] = useState(0)
    const [ volumeSummation, setvolumeSummation ] = useState(100)

    // useEffect( () => {

    //     if ( Info ) {
    //         console.log(Info.selectedCoins)
    //         setselectedCoins([...Info.selectedCoins])
    //         setAmountUSD(Info.Price)

    //         var oldCoins = [...mainCoins]

    //         if ( mainCoins.length > 0 ) {

    //             for (let k = 0; k < Info.selectedCoins.length; k++) {
    //                 const coin = Info.selectedCoins[k];
    //                 var thatCoinIndex ;
    //                 // const thatCoinIndex = mainCoins.indexOf( (JCOin) => JCOin.coin_name === coin.coin_name )
    //                 for (let n = 0; n < oldCoins.length; n++) {
    //                     const element = oldCoins[n];

    //                     if ( element.coin_name === coin.coin_name ) {
    //                         oldCoins.splice(n,1)
    //                     }
                        
    //                 }
    //             }
    //             console.log(selectedCoins)
    //             setMaincoins(oldCoins)
    //             setselectedCoins(Info.selectedCoins)

    //     }else{
            
    //     }
    // }

    // } ,[] )

    useEffect( () => {

        var percentage = 100 / selectedCoins.length

        var oldSelectedCoin = [...selectedCoins]

        for (let m = 0; m < oldSelectedCoin.length; m++) {
            oldSelectedCoin[m].percentage = percentage
        }

        setselectedCoins([...oldSelectedCoin])

    } ,[mainCoins] )

    useEffect( () => {

        var percentage = 0

        for (let m = 0; m < selectedCoins.length; m++) {
           var pToadd = selectedCoins[m].percentage
           percentage = pToadd + percentage
        }

        setvolumeSummation(percentage)

    }, [selectedCoins] )

    return(

        <div className="create_etf_basket" >

            {/* <Link className='create_etf_back' to={"#"} onClick={proccedToPreviousPage} >
                <AiOutlineArrowLeft className='create_etf_back_ic' />  
                Intro 
            </Link> */}

            <div className='create_etf_intro_top' >

                    <div className='create_etf_intro_top_left' >
                        <h3 className='create_etf_intro_top_left_main' >Define ETF Basket</h3>
                        <h6 className='create_etf_intro_top_left_sub' style={{color:"gray"}} >What will back your ETF? What happens in default scenarios?</h6>
                    </div>

                <button className='create_etf_intro_top_right' disabled={
                    selectedCoins.length < 1 || AmountUSD < 1 || volumeSummation !== 100 || !AmountUSD ? true : false
                } onClick={ () => {
                    saveInfo({ selectedCoins: selectedCoins, Price: AmountUSD })
                    proccedToNextPage()
                }} >
                    Confirm Basket 
                </button>

            </div>

            <div className='create_etf_basket_main' >

                <div className='create_etf_basket_main_basketBox' >
                    <div className='create_etf_basket_main_tokenBox_top' >ETF Basket</div>

                    <div className='create_etf_basket_main_basketBox_total' >

                        <h5>1 ETF =</h5>

                        <h5> { AmountUSD !== 0 ? AmountUSD :'--' } USD </h5>

                    </div>

                    <div className='create_etf_basket_main_basketBox_total' >

                        <h5>USD - Basket Scale</h5>

                        <div className='create_etf_basket_main_basketBox_total_right' >

                            <input type='number' className='create_etf_basket_main_basketBox_total_right_input' value={AmountUSD} onChange={ (e) => {
                                setAmountUSD( parseInt(e.target.value) )
                            } } />

                            <h5>USD</h5>

                        </div>

                    </div>

                    <div className='create_etf_basket_main_basketBox_total' style={{borderBottom:"none"}} >

                        <h6>Basket</h6>

                        <h5 style={{color: volumeSummation !== 100 ? 'red' : 'white'}} >{volumeSummation}%</h5>

                    </div>

                    <div className='create_etf_basket_main_basketBox_total' style={{borderBottom:"none"}} >

                        <h6>Tokens</h6>

                        <button className='create_etf_intro_top_right' disabled={false} onClick={ () => setopenTokenModal(true) } >
                            Choose Token
                        </button>

                    </div>

                    <div className='create_etf_basket_main_basketBox_mid' >

                        {/* <div className='create_etf_basket_main_basketBox_mid_empty' >
                            <BiBox className='create_etf_basket_main_basketBox_mid_empty_ic' />

                            <h4>Empty Basket</h4>

                            <h6>The basket & weights of the collateral for your ETF will populate here.</h6>
                        </div> */}

                        { selectedCoins.length > 0 ? selectedCoins.map( (sCoin,index) => {

                            let percentageInUsd = AmountUSD * sCoin.percentage / 100
                            
                            let price = percentageInUsd / sCoin.price 

                            return <TokenVolume
                                token_name={sCoin.coin_name}
                                token_percentage={sCoin.percentage}
                                coin_img={sCoin.img}
                                price={price}
                                removeToken={ () => {
                                    var oldMainCoins = [...mainCoins]
                                    var oldSelectedCoin = [...selectedCoins]

                                    oldMainCoins.push({
                                        coin_name: sCoin.coin_name, 
                                        price: sCoin.price, 
                                        img: sCoin.img, 
                                        reference_unit: sCoin.reference_unit, 
                                        colateral_token: sCoin.colateral_token, 
                                        decimals: sCoin.decimals
                                    })
                                    oldSelectedCoin.splice(index,1)

                                    setMaincoins(oldMainCoins)
                                    setselectedCoins(oldSelectedCoin)
                                } }
                                Change_token_percentage={ (e) => {

                                    let oldSelectedCoin = [...selectedCoins]

                                    oldSelectedCoin[index] = {
                                        ...oldSelectedCoin[0],
                                        percentage: parseInt(e.target.value)
                                    }

                                    setselectedCoins(oldSelectedCoin)

                                } }
                            />
                        } ) : 
                        
                            <div className='create_etf_basket_main_basketBox_mid_empty' >
                                <BiBox className='create_etf_basket_main_basketBox_mid_empty_ic' />

                                <h4>Empty Basket</h4>

                                <h6>The basket & weights of the collateral for your ETF will populate here.</h6>
                            </div>
                        
                        }

                    </div>

                </div>

            </div>

            {/* <div className='create_etf_basket_floating' >
                <BiPlus className='create_etf_basket_floating_ic' />
                Add Token
            </div> */}

            { openTokenModal ?
            <>
            <div className='create_etf_basket_main_tokenBox' style={{zIndex:20}} >

            <div className='create_etf_basket_main_tokenBox_top' >Tokens</div>

                <div className='create_etf_basket_main_tokenBox_mid' >
                    
                    { mainCoins.map( (thecoin,index) => {

                        var Choosen ;

                        const thatCoin = PreselectedCoins.find(name => name.coin_name === thecoin.coin_name);

                        if ( thatCoin ) {
                            Choosen = 'gray'
                        }else{
                            Choosen = 'transparent'
                        }

                        return <TokenList
                            token_img={ thecoin.img }
                            token_name={ thecoin.coin_name }
                            colateral_token={ thecoin.colateral_token }
                            decimals={ thecoin.decimals }
                            Choosen={Choosen}
                            reference_unit={ thecoin.reference_unit }
                            ChooseToken={ () => {
                                
                                var oldSelectedCoin ;

                                if ( thatCoin ) {
                                    var thatCoinIndex;
                                    for (let n = 0; n < PreselectedCoins.length; n++) {
                                        const element = PreselectedCoins[n];
                                        if ( element.coin_name === thecoin.coin_name ) {
                                            thatCoinIndex = n
                                        }
                                    }

                                    oldSelectedCoin = [...PreselectedCoins]
                                    oldSelectedCoin.splice(thatCoinIndex,1)
                                    setPreselectedCoins(oldSelectedCoin)
                                }else{

                                    oldSelectedCoin = [...PreselectedCoins]
                                    oldSelectedCoin.push({
                                        ...thecoin,
                                        percentage:10,
                                        priceInUSD: 30
                                    })
                                    setPreselectedCoins(oldSelectedCoin)

                                }

                                // var oldMainCoins = [...mainCoins]

                                // oldMainCoins.splice(index,1)
                                // setMaincoins(oldMainCoins)
                            } }
                        />
                    } ) }

                </div>

                <div className='create_etf_basket_main_tokenBox_btm' >
                    <button className='create_etf_basket_main_tokenBox_btm_btn' onClick={ () => {

                        var oldCoins = [...mainCoins]
                        var oldPreselected = [...PreselectedCoins]

                        if ( mainCoins.length > 0 ) {

                            for (let k = 0; k < oldPreselected.length; k++) {
                                const coin = oldPreselected[k];
                                var thatCoinIndex ;
                                // const thatCoinIndex = mainCoins.indexOf( (JCOin) => JCOin.coin_name === coin.coin_name )
                                for (let n = 0; n < oldCoins.length; n++) {
                                    const element = oldCoins[n];

                                    if ( element.coin_name === coin.coin_name ) {
                                        oldCoins.splice(n,1)
                                    }
                                    
                                }
                            }

                            // console.log(oldCoins)
                            setMaincoins(oldCoins)
                            setselectedCoins([
                                ...selectedCoins,
                                ...PreselectedCoins
                            ])
                            setPreselectedCoins([])
                            setopenTokenModal(false)
                            }else{
                                setPreselectedCoins([])
                                setopenTokenModal(false)
                            }

                    }
                    
                    } >
                        Add to basket
                    </button>
                </div>

            </div>

            <Backdrop
                closeModal={ () => setopenTokenModal(false) }
            />

            </>

            : <></> }

            {  }

        </div>

    );

}

export default CreateETFBasket;