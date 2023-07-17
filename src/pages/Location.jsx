import React, { useEffect, useState } from "react";
import Card from "../components/Cards/Card";
import Style from "./episode.module.css"
import { AiFillCaretDown, AiOutlineCaretDown } from "react-icons/ai";

export const Location = () => {

    let [state, setstate] = useState(false);
    let [results, setResults] = React.useState([]);
    let [info, setInfo] = useState([]);
    let { dimension, type, name } = info;
    let [number, setNumber] = useState(1);
    const length = 126; // Replace 10 with the desired length of the array
    const Arr = Array(length).fill().map((_, i) => i + 1);

    let api = `https://rickandmortyapi.com/api/location/${number}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);

            let a = await Promise.all(
                data.residents.map((x) => {
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
                    {/* <h1>Episode : <span style={{color:"blue"}}>
                    {name === "" ? "Unkown" : name}
                        </span></h1>

                    <h5>Air Date : {air_date === "" ? "Unkown" : air_date}</h5> */}
                    <h1> Location :
                        <span className="text-primary">
                            {" "}
                            {name === "" ? "Unknown" : name}
                        </span></h1>

                    <h5 className="text-center">
                        Dimension: {dimension === "" ? "Unknown" : dimension}
                    </h5>
                    <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
                </div>
                <div className={Style["upper-filter"]}>
                    <div className={Style["choose"]} onClick={() => {
                        setstate(!state);
                    }} >
                        Select Episode
                        <AiOutlineCaretDown />
                    </div>
                    {
                        state && (
                            <div className={Style["episode-opt"]}>
                                {Arr?.map((item) => {
                                    return (<p key={item} className={Style["episode-item"]}
                                        onClick={() => {

                                            setNumber(item);


                                        }}

                                        style={{ background: number === item ? "rgb(198, 198, 198)" : "" }}

                                    >{item}</p>)
                                })}

                            </div>
                        )
                    }
                </div>
                <span style={{ color: "blue", cursor:"pointer" }} onClick={() => {
                    (setNumber(1) && setstate(null))
                }} >Clear filter</span>
            </div>
            <Card results={results} />

        </>
    );
};

