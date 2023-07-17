import { useState } from "react";
import Style from "./gender.module.css"

import {AiFillCaretDown, AiOutlineCaretDown} from "react-icons/ai";

export const Gender=({setGender,setSelect1,select1})=>{
    let [state,setstate] = useState(false);
    

    
    // console.log(select);
    let genderArr = ["Male" , "Female" , "Unknown","Genderless" ]
    return (
        <div className={Style["gender"]}>
            <div className={Style["choose-gender"]} onClick={()=>{
                setstate(!state);
            }}>
                Gender
                <AiOutlineCaretDown/>
            </div>
           {
            state && (
                <div className={Style["gender-opt"]}>
                {genderArr?.map((item)=>{
                    return(<p key = {item} className={Style["gender-item"]} 
                    onClick={()=>{
                        setSelect1(item);
                        select1!==item ? setGender(item) : setGender("");
                    }}

                    style={{background:select1===item?"rgb(198, 198, 198)":""}}
                    
                    >{item}</p>)
                })}

            </div>
            )
           }

        </div>
    );
}