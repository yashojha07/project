import React, { useEffect, useState } from "react";
import Card from "../components/Cards/Card";
import Style from "./episode.module.css"
import {AiFillCaretDown, AiOutlineCaretDown} from "react-icons/ai"; 

export const Episodes = () => {
    let [results, setResults] = React.useState([]);
    let [info, setInfo] = useState([]);
    let { air_date, episode, name } = info;
    let [id, setID] = useState(1);
    let [state,setstate] = useState(false);
    const length = 51; // Replace 10 with the desired length of the array
const Arr = Array(length).fill().map((_, i) => i + 1);

    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);

            let a = await Promise.all(
                data.characters.map((x) => {
                    return fetch(x).then((res) => res.json());
                })
            );
            setResults(a);
        })();
    }, [api]);

    return (
        <>
            <div className={Style["upper"]}>
                <div className={Style["name"]}>
                    <h1>Episode : <span style={{color:"blue"}}>
                    {name === "" ? "Unkown" : name}
                        </span></h1>

                    <h5>Air Date : {air_date === "" ? "Unkown" : air_date}</h5>
                </div>
                <div className={Style["upper-filter"]}>
                   <div className={Style["choose"]}  onClick={()=>{
                setstate(!state);
            }} >
                    Select Episode
                    <AiOutlineCaretDown/>
                   </div>
                   {
                                state && (
                                    <div className={Style["episode-opt"]}>
                                    {Arr?.map((item)=>{
                                        return(<p key = {item} className={Style["episode-item"]} 
                                        onClick={()=>{
                                            
                                            setID(item);
                                          
                                           
                                        }}
                    
                                        style={{background:id===item?"rgb(198, 198, 198)":""}}
                                        
                                        >{item}</p>)
                                    })}
                    
                                </div>
                                )
                   }
                </div>
                <span style={{color:"blue",cursor:"pointer"}} onClick={()=>{
                    (setID(1) && setstate(null))
                } }>Clear filter</span>
            </div>
            <Card results={results} />

        </>
    );
};

