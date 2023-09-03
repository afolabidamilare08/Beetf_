

const ETFcreateIntro = ({proccedToNextPage}) => {

    return(

        <div className='create_etf_intro' >
            
            <div className='create_etf_intro_top' >

                <div className='create_etf_intro_top_left' >
                    <h3 className='create_etf_intro_top_left_main' >Create New ETF</h3>
                    <h6 className='create_etf_intro_top_left_sub' >Set primary assets in the ETF
                    </h6>
                </div>

                <button className='create_etf_intro_top_right' onClick={ proccedToNextPage } >
                    Create EFT
                </button>

            </div>

            <div className='create_etf_intro_process' >
                
                <div className='create_etf_intro_process_top' >
                    <h6 className='create_etf_intro_process_top_span' >Tx</h6>
                    <h6 className='create_etf_intro_process_top_h6' >ETF Deployment</h6>
                </div>

                <ul className='create_etf_intro_process_ul' >
                    <li>Select Tokens</li>
                    <li>Set ETF parameters</li>
                    <li>Deploy ETF</li>
                    <li>Trade ETF</li>
                </ul>

            </div>

        </div>

    );

}

export default ETFcreateIntro;