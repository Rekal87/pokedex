import { getFormattedFileName } from "../utils/getFormattedFileName";

function Card(props) {
  console.log("Card props:", props);
  const pokemon = props.pokemon;
  if (!pokemon) {
    return <div>No Pokémon data available.</div>;
  }
  return (
    <div>
      <h3>
        {pokemon.name.english} #{pokemon.id}
      </h3>
      <img src={`/images/${getFormattedFileName(pokemon.id)}`} alt="Pokemon" />
      <p>
        Type: {pokemon.type[0]} {pokemon.type[1]}
      </p>
      <div className="pokemon-view">
        <tbody>
          <tr>
            <td>
              <p>Attack: {pokemon.base.Attack}</p>
            </td>
            <td>
              <p>Defense: {pokemon.base.Defense}</p>
            </td>
            <td>
              <p>HP: {pokemon.base.HP}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Sp. Attack: {pokemon.base["Sp. Attack"]}</p>
            </td>
            <td>
              <p>Sp. Defense: {pokemon.base["Sp. Defense"]}</p>
            </td>
            <td>
              <p>Speed: {pokemon.base.Speed}</p>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  );
}

export default Card;
