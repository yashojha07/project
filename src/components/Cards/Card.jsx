import Display from "./Display";
import Style from "./card.module.css"

function Card({ results }) {
  console.log(results);

  return (
    <>
    <h1 className={Style["ch-h"]} >CHARACTERS</h1>
    <div  className={Style["card"]}>
    
    {results?.map((e) => {
      return (<Display  name={e.name} image={e.image} status={e.status} location ={e.location} species={e.species} origin={e.origin}/>);
    })}

  </div>
    </>
  );
}


export default Card;