import Style from "./display.module.css";

function Display({ name, image, status, location, species, origin }) {
  let color = "grey";

  if (status === "Alive") {
    color = "green";
  } else if (status === "Dead") {
    color = "red";
  }

  return (
    <div className={Style.display}>
      <img className={Style.image} alt="img" src={image} />
      <div className={Style.name}>{name}</div>
      <div className={Style.location}>
        <p>last-location: {location.name} <br />
          Species: {species}
          <br />
          Origin: {origin.name}
        </p>
      </div>
      <div className={Style.status}>
        <div className={Style.sts} style={{ backgroundColor: color }}>
          {status}
        </div>
      </div>
    </div>
  );
}

export default Display;
