import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import icclose from '../icons/close.png'
const Welcome=()=>{
    const[showWelome , setShowWelccome] = useState();
    useEffect(()=>{
        const data =  localStorage.getItem("show_app_intro")
            setShowWelccome(JSON.parse(data) ?? true)
    },[])
    const onHideWelcome=()=>{
        setShowWelccome(false);
        localStorage.setItem("show_app_intro" , JSON.stringify(false))
    }
    return(
    <React.Fragment>
        {showWelome && (
            <div className="container">
            <div className=" bg-primary text-white my-3 ">
                <img src={icclose}
                 style={{float: "right", margin: "5px"}}
                 onClick={onHideWelcome}
                 />
            </div>
            <div className="p-4">Welcome</div>
        </div>
        )}
    </React.Fragment>
    )
    
}
export default Welcome