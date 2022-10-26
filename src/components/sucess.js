import React from "react";
import "../components/login .css"
import { useNavigate } from "react-router-dom";
import Commonpage from "./homepage";

function Sucesspage() {

    const navigate = useNavigate();
 

    return (
        <div>
            <Commonpage />
            <div className="login row" style={{ backgroundColor:"#D1D7E0" }}>
              <h1 style={{fontFamily: "italic"}}> YOUR BOOKING HAS COMPLETED,THANK YOU.</h1>
              <button type="button" class="btn btn-success" onClick={()=>navigate("/home")} style={{marginTop:"150px"}}>Home</button>
                </div >
          
            </div>
       
    )
}

export default Sucesspage;