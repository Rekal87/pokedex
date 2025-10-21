import image from "../assets/images/001.png";

function Card() {
  return (
    <div>
      <h2>Pokemon name</h2>
      <img src={image} alt="Pokemon" />
      <p>Type: Fire</p>
      <p>stats</p>
    </div>
  );
}

export default Card;
