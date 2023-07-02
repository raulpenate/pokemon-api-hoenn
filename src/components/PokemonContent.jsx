import PokemonCard from './PokemonCard'

const PokemonContent = ({ pokemon }) => {
  return (
    <div
      className='grid grid-cols-1 md:grid-cols-3 
        lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
        gap-3 lg:gap-9 justify-items-center'>
      {pokemon.map(({ img, ndex, exp, nombre, tipo }, key) => (
        <PokemonCard
          key={key}
          img={img}
          ndex={ndex}
          exp={exp}
          nombre={nombre}
          tipo={tipo}
        />
      ))}
    </div>
  )
}

export default PokemonContent
