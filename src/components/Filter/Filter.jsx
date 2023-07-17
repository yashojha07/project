import React from 'react'
import { Gender } from './filter-comp/Gender'
import Style from "./filter.module.css"
import {Status} from "./filter-comp/Status"
import { Species } from './filter-comp/Species'
import { useState } from 'react'


const Filter = ({setGender,setStatus,SetSpecies}) => {
  let [select1,setSelect1] = useState(null);
  let [select2,setSelect2] = useState(null);
  let [select3,setSelect3] = useState(null);
  return (
    <div className='flter'>
      <div className={Style["filter-cnt"]}>
      <Gender setGender={setGender} setSelect1={setSelect1} select1={select1}/>
      <Status setStatus={setStatus} setSelect2={setSelect2} select2={select2}/>
      <Species SetSpecies={SetSpecies} setSelect3={setSelect3} select3={select3}/>
      
    </div>
    <div className={Style['clear-filter']}>
     <span onClick={()=>{
      setSelect1(null)
      setGender("");
      setSelect2(null)
      SetSpecies("");
      setSelect3(null)
      setStatus("");
     }} >clear-filter</span>
    </div>
    </div>
  )
}

export default Filter
