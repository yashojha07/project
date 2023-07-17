
import { useState } from "react";
import Style from "./navbar.module.css"
import {AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom";

function Nav(){
    const [toggle,setToggle]= useState(false);
    
     
    return (
        <div>
            <nav className={Style["navbar"]}>
        <div className={Style["logo"]}>
            {/* <h2>Rick<span> & </span> Mordy</h2> */}
            <img className={Style["logo-img"]} src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt="logo"/>
        </div>
        <div className={Style["nav-pages"]} >
            <ul>
                <li><Link to="/" style={{textDecoration:"none",color:"white"}} >Characters</Link></li>
                <li><Link to="/location" style={{textDecoration:"none",color:"white"}} >Location</Link></li>
                <li><Link to="/episodes" style={{textDecoration:"none",color:"white"}} >Episodes</Link></li>
                
            </ul>
        </div>
        <div className={Style["toggle-btn"]} onClick={()=>{
          setToggle(!toggle)
        }}>
            < AiOutlineMenu/>
             
        </div>
        </nav>
       
       {toggle?<div className={Style["hidden-nav"]}>
       <ul>
                <li onClick={()=>{
          setToggle(!toggle)
        }}><Link to="/" style={{textDecoration:"none",color:"white"}} >Characters</Link></li>
                <li onClick={()=>{
          setToggle(!toggle)
        }}><Link to="/location" style={{textDecoration:"none",color:"white"}} >Location</Link></li>
                <li onClick={()=>{
          setToggle(!toggle)
        }}><Link to="/episodes" style={{textDecoration:"none",color:"white"}} >Episodes</Link></li>
            </ul>
       </div>:""}
        

        
        </div>
    );
}

export default Nav;