import './dropdown.scss';
import { BiChevronDown } from 'react-icons/bi';
import { useState } from 'react';

const Maindropdown = ({optionsArray,style}) => {

    const [ openOptions, setopenOptions ] = useState(false)
    const [ displayText, setdisplayText ] = useState(optionsArray[0])

    return(
        
        <div className='dropBtn' style={style} onClick={
            () => setopenOptions(!openOptions)
        } >
            {displayText}

            <BiChevronDown className='dropBtn_ic' />

            { openOptions ? 
            
                <div className='dropBtn_opt' >

                    { optionsArray.map( (option, index) => {

                        return <div className='dropBtn_opt_tp' key={index} onClick={ () => setdisplayText(option) } > {option} </div>

                    } ) }

                </div>

            : <></> }

        </div>

    );

}


export { Maindropdown }