import image from "../assets/images/001.png";

function Card() {
  return (
    <div>
      <h3>Pokemon name</h3>
      <img src={image} alt="Pokemon" />
      <p>Type: Fire</p>
      <p>stats</p>
    </div>
  );
}

export default Card;
