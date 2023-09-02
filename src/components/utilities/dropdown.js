import './dropdown.scss';
import { BiChevronDown } from 'react-icons/bi';
import { useState } from 'react';

const Maindropdown = ({optionsArray,style,optionsText,openOptions,setopenOptions}) => {

    // const [ openOptions, setopenOptions ] = useState(false)
    const [ displayText, setdisplayText ] = useState(optionsArray[0])

    return(
        
        <div className='dropBtn' style={style} onClick={setopenOptions} >
            {displayText}

            <BiChevronDown className='dropBtn_ic' />

            { openOptions ? 

                    <div className='dropBtn_opt' >

                        <div className='drop_title' style={{fontSize:'.8rem',textAlign:"center",margin:"1rem 0rem", color:"lightgrey",fontWeight:"600"}} >{optionsText}</div>

                        { optionsArray.map( (option, index) => {

                            return <div className='dropBtn_opt_tp' key={index} onClick={ () => setdisplayText(option) } > {option} </div>

                        } ) }

                    </div>

            : <></> }

        </div>

    );

}


export { Maindropdown }