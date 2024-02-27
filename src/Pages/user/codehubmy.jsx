import React from "react";
import{id,question,answer}from "./codehubapi"
import Codehub from "./codehub";

const Codehubmy = () =>{
    const[data,setData]=useState(question);
    return<>
        {
            data.map((ele)=>{
                const{id}=ele;
                return <Codehub key={id}{...ele}/>
            })
        }
    </>
}
export default Codehubmy;