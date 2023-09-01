const Backdrop = ({content}) => {

    const backdropStyle = {
        border:"1px solid red"
    }
    

    return(

        <div style={{
            position:"fixed",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            top:"0",
            left:'0',
            width:"100%",
            height:"100vh",
            backgroundColor:"rgba(0, 0, 0, 0.319)",
            // opacity:0.6,
            zIndex:11
        }} onClick={()=>alert('yes')} >

            

        </div>

    );

}
export {Backdrop};