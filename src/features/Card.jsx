import { getFormattedFileName } from "../utils/getFormattedFileName";

function Card(props) {
  console.log("Card props:", props);
  const pokemon = props.pokemon;
  if (!pokemon) {
    return <div>No Pokémon data available.</div>;
  }
  return (
    <div>
      <h3>{pokemon.name.english}</h3>
      <img src={`/images/${getFormattedFileName(pokemon.id)}`} alt="Pokemon" />
      <p>
        Type: {pokemon.type[0]} {pokemon.type[1]}
      </p>
      <tbody>
        <tr>
          <td>Attack: {pokemon.base.Attack}</td>
          <td>Defence: {pokemon.base.Defence}</td>
          <td>HP: {pokemon.base.HP}</td>
        </tr>
        <tr>
          <td>Sp. Attack: {pokemon.base["Sp. Attack"]}</td>
          <td>Sp. Defense: {pokemon.base["Sp. Defense"]}</td>
          <td>Speed: {pokemon.base.Speed}</td>
        </tr>
      </tbody>
    </div>
  );
}

export default Card;
