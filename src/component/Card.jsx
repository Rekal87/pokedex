import { getFormattedFileName } from "../utils/getFormattedFileName";

function Card(props) {
  console.log("Card props:", props);
  const pokemon = props.pokemon;
  if (!pokemon) {
    return <div>No Pokémon data available.</div>;
  }
  return (
    <div>
      <div className="overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="px-4 py-5 sm:p-6">
          <img
            src={`/images/${getFormattedFileName(pokemon.id)}`}
            alt="Pokemon"
          />
        </div>
        <div className="bg-gray-50 px-4 py-4 sm:px-6 pokemon-view">
          <p className="id">#{pokemon.id}</p>
          <h5>{pokemon.name.english} </h5>
        </div>
      </div>
      {/* <h3>
        
      </h3>
      
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
      </div> */}
    </div>
  );
}

export default Card;
