
import Style from "./search.module.css"

export const Search=({setPage,setSearch})=>{
    return (
        <div >
            <input className={Style["search-input"]} placeholder="Search ......" name="search" onChange={(e)=>{
                setPage(1);
                setSearch(e.target.value)
            }}/>
            <button className={Style["search-btn"]} onClick={(e)=>{
                e.preventDefault();
            }}>SEARCH</button>
        </div>
    );
}