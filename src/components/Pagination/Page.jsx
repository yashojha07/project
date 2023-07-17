import "./page.css"

export const Pagination =({page,setPage})=>{
   


    return (
        <div className="page">
            <button className="prev" onClick={()=>{
                if(page===1)return;
                setPage((x)=>(x-1))
            }}>PREV</button>
            <p style={{paddingTop:"10px"}}>{page} out of 48</p>
            <button className="nxt" onClick={()=>{
                setPage((x)=>(x+1))
            }}>NEXT</button>
        </div>
    );
}