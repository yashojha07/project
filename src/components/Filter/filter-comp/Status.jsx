
import Style from "./status.module.css"
import { useState } from "react";
import { AiFillCaretDown, AiOutlineCaretDown } from "react-icons/ai";

export const Status = ({ setStatus,setSelect2,select2 }) => {
    let [state, setstate] = useState(false);
    let genderArr = ["Dead", "Alive", "Unknown"]
    return (
        <div className={Style["status"]}>
            <div className={Style["choose-status"]} onClick={() => {
                setstate(!state);
            }}>
                Status
                <AiOutlineCaretDown />
            </div>
            {
                state && (
                    <div className={Style["status-opt"]}>
                        {genderArr?.map((item) => {
                            return (<p key={item} className={Style["status-item"]}
                                onClick={() => {
                                    setSelect2(item);
                                    setStatus(item);

                                }}

                                style={{ background: select2 === item ? "rgb(198, 198, 198)" : "" }}

                            >{item}</p>)
                        })}

                    </div>
                )
            }
        </div>
    );
}