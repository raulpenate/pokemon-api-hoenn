import Footer from './components/Footer'
import Header from './components/Header'
import PokemonContent from './components/PokemonContent'
import { usePokemon } from './hooks/usePokemon'
import pokeball from './assets/pokeball.png'
const App = () => {
  const { filterName, filterType, orderPokemons, isLoading, pokemon } =
    usePokemon()

  return (
    <>
      <Header
        filterName={filterName}
        filterType={filterType}
        orderPokemons={orderPokemons}
      />
      {/* Shows loading if content is not ready */}
      {!isLoading ? (
        <PokemonContent pokemon={pokemon} />
      ) : (
        <div
          style={{
            textShadow: '1px 1px #000',
          }}
          className='w-full h-full flex justify-center items-center'>
          <img
            src={pokeball}
            className='animate-spin w-24 md:w-72'
          />
        </div>
      )}
      <Footer />
    </>
  )
}

export default App
