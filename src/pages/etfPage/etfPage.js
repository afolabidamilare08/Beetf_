import { NavLink } from "react-router-dom";
import HeaderComponent from "../../components/header_component/header_component";
import './etfPage.scss';
import { FaSearch } from 'react-icons/fa';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Maindropdown } from "../../components/utilities/dropdown";
import { BsArrowUpRight, BsArrowDownLeft } from 'react-icons/bs';
import { useState } from "react";
import { TokenETFList } from "../../components/utilities/tokens_list";

const EtfPage = () => {

    const [ EtfList, setEtfList ] = useState([
        { etf_name: 'CryptoFund Pro', 
            token: [ 
                {token_name: 'DAI', percentage: 20, }, 
                {token_name: 'BNB', percentage: 80} 
        ], etf_price: 500, etf_change:0.001, change_status:"positive" },
        { etf_name: 'DigitalAsset Diversify', 
            token: [ 
                {token_name: 'USDT', percentage: 50, }, 
                {token_name: 'DAI', percentage: 20}, 
                {token_name: 'ETH', percentage: 30}, 
        ], etf_price: 300, etf_change:1.001, change_status:"positive" },
        { etf_name: 'Blockchain Builder', token: [ 
            {token_name: 'ETH', percentage: 70, }, 
            {token_name: 'DAI', percentage: 20}, 
            {token_name: 'USDT', percentage: 10}, 
        ], etf_price: 800, etf_change:0.34, change_status:"negative" },
        { etf_name: 'CoinTrust ETF', token: [ 
            {token_name: 'DAI', percentage: 30}, 
            {token_name: 'USDT', percentage: 70}, 
        ], etf_price: 100, etf_change:0.784, change_status:"positive"  },
        { etf_name: 'CryptoSmart Portfolio', token: [ 
            {token_name: 'ETH', percentage: 10}, 
            {token_name: 'DAI', percentage: 90}, 
        ], etf_price: 1000, etf_change:1.29, change_status:"negative" },
    ])

    const [ openOptionsRange, setopenOptionsRange ] = useState(false)
    const [ openOptionsTime, setopenOptionsTime ] = useState(false)

    const ETFListComponent = ({number,etf_name,etf_price,etf_change,change_status,token}) => {

        return (
            <NavLink to={'/swap'} className="etf_btm_component_table_row special_row" >
                
                <div className="etf_btm_component_table_row_id" >{number}</div>
                <div className="etf_btm_component_table_row_name" >{etf_name}</div>
                <div className="etf_btm_component_table_row_price" >${etf_price}</div>
                <div className="etf_btm_component_table_row_change next_change" style={{
                    color: change_status === 'positive' ? '#65fd05' : 'red'
                }}  >
                    { change_status === 'positive' ? <BsArrowUpRight className="next_change_ic" /> : <BsArrowDownLeft className="next_change_ic" /> }
                    {etf_change}%
                </div>
                <div className="etf_btm_component_table_row_tvl" >$1B</div>
                <div className="etf_btm_component_table_row_volume" >$230M</div>
                <div className="etf_btm_component_table_row_tokens" style={{
                    display:"flex",
                    justifyContent:"center"
                }} >
                    { token.map( (Ttoken,index) => {

                        return  <TokenETFList coin={Ttoken.token_name} />

                    } ) }
                </div>

            </NavLink>
        );

    }

    return (

        <div className="etf_body" >
            <HeaderComponent location={"swap"} />

            <div className="etf_top_component" >

                <div className="etf_top_component_left" >

                    <div className="etf_top_component_left_title" >Search for ETFs</div>

                    <div className="etf_top_component_left_form" >
                        <input type="search" className="etf_top_component_left_form_input" placeholder="Search for Etfs" />
                        <button className="etf_top_component_left_form_btn" >
                            <FaSearch className="etf_top_component_left_form_btn_ic" />
                        </button>
                    </div>

                    <div className="etf_top_component_left_results" >

                        <div className="etf_top_component_left_results_title" >
                            Search results
                        </div>

                        <NavLink to={'/etf'} className="etf_top_component_left_results_link" >

                            Dpa's ETFs

                            <BiRightArrowAlt className="etf_top_component_left_results_link_ic" />

                        </NavLink>

                    </div>

                </div>
                
            </div>

            <div className="etf_btm_component" >

                <div className="etf_btm_component_title" >Top ETF's on BeETF</div>

                <div className="etf_btm_component_filters" >

                    <Maindropdown
                        style={{
                            marginRight:'.6rem'
                        }}
                        openOptions={ openOptionsRange }
                        setopenOptions={ () => {
                            setopenOptionsTime(false)
                            setopenOptionsRange(!openOptionsRange)
                        } }
                        optionsArray={[
                            "Rank",
                            "Market Cap",
                            "% Change",
                            "Price",
                        ]} 
                        optionsText={'Sort by'}     
                        // optionsText={'Price % change timeframe'}     
                    />

                    <Maindropdown
                        openOptions={ openOptionsTime }
                        setopenOptions={ () => {
                            setopenOptionsRange(false)
                            setopenOptionsTime(!openOptionsTime)
                        } }
                        optionsArray={[
                            "1H",
                            "6H",
                            "24H",
                            "7D",
                        ]}  
                        optionsText={'Price % change timeframe'}     
                    />


                    
                </div>

                <div className="etf_btm_component_table" >

                    <div className="etf_btm_component_table_row" style={{
                        borderBottom:'1px solid white'
                    }} >
                        
                        <div className="etf_btm_component_table_row_id" >#</div>
                        <div className="etf_btm_component_table_row_name" >ETF Name</div>
                        <div className="etf_btm_component_table_row_price" >Price</div>
                        <div className="etf_btm_component_table_row_change" >Change</div>
                        <div className="etf_btm_component_table_row_tvl" >TVL</div>
                        <div className="etf_btm_component_table_row_volume" >Volume</div>
                        <div className="etf_btm_component_table_row_tokens" >Tokens</div>

                    </div>

                    { EtfList.map( (ETF,index) => {
                        return (
                            <ETFListComponent
                                number={ index + 1 }
                                etf_name={ ETF.etf_name }
                                change_status={ ETF.change_status }
                                etf_price={ ETF.etf_price }
                                key={index}
                                etf_change={ETF.etf_change}
                                token={ ETF.token }
                            />
                        );
                    } ) }                    

                </div>

            </div>

        </div>

    );

}

export default EtfPage;