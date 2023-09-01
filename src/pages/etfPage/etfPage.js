import { NavLink } from "react-router-dom";
import HeaderComponent from "../../components/header_component/header_component";
import './etfPage.scss';
import { FaSearch } from 'react-icons/fa';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Maindropdown } from "../../components/utilities/dropdown";
import { BsArrowUpRight } from 'react-icons/bs';
import { useState } from "react";

const EtfPage = () => {

    const [ ETFlist, setETFlist ] = useState([
        { id: "1", name:"Dfi's ETF", price:"$1,909,000", change:"0.000%" },
        { id: "2", name:"FRK's ETF", price:"$7,600,000", change:"0.000%" },
    ])

    const ETFListComponent = () => {

        return (
            <NavLink to={'/swap'} className="etf_btm_component_table_row special_row" >
                
                <div className="etf_btm_component_table_row_id" >2</div>
                <div className="etf_btm_component_table_row_name" >Dfi's ETF</div>
                <div className="etf_btm_component_table_row_price" >$1,909,000</div>
                <div className="etf_btm_component_table_row_change next_change" >
                    <BsArrowUpRight className="next_change_ic" />
                    0.000%
                </div>
                <div className="etf_btm_component_table_row_tvl" >$1B</div>
                <div className="etf_btm_component_table_row_volume" >$230M</div>

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

                <div className="etf_btm_component_title" >Top ETF's on Bridgooor</div>

                <div className="etf_btm_component_filters" >

                    <Maindropdown
                        style={{
                            marginRight:'.6rem'
                        }}
                        optionsArray={[
                            "Most Popular ETFs",
                            "Least Popular ETFs",
                            "Cheap ETFs",
                        ]}      
                    />

                    <Maindropdown
                        optionsArray={[
                            "1D",
                            "1Y",
                            "2M",
                        ]}      
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

                    </div>

                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    <ETFListComponent/>
                    

                </div>

            </div>

        </div>

    );

}

export default EtfPage;