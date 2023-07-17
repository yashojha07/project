import { useState } from "react";
import Style from "./species.module.css"

import { AiFillCaretDown, AiOutlineCaretDown } from "react-icons/ai";

export const Species = ({ SetSpecies, setSelect3,select3}) => {
    let [state, setstate] = useState(false);
    // console.log(select);
    let SpeciesArr = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
    ];
    return (
        <div className={Style["Species"]}>
            <div className={Style["choose-Species"]} onClick={() => {
                setstate(!state);
            }}>
                Species
                <AiOutlineCaretDown />
            </div>
            {
                state && (
                    <div className={Style["Species-opt"]}>
                        {SpeciesArr?.map((item) => {
                            return (<p key={item} className={Style["Species-item"]}
                                onClick={() => {
                                    setSelect3(item);
                                    SetSpecies(item);

                                }}

                                style={{ background: select3 === item ? "rgb(198, 198, 198)" : "" }}

                            >{item}</p>)
                        })}

                    </div>
                )
            }

        </div>
    );
}