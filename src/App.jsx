import Footer from './components/Footer'
import Header from './components/Header'
import PokemonContent from './components/PokemonContent'
import LoadingPage from './components/LoadingPage'
import { usePokemon } from './hooks/usePokemon'

import ScrollToTop from 'react-scroll-to-top'

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
      {!isLoading ? <PokemonContent pokemon={pokemon} /> : <LoadingPage />}

      {/* Scrolls to the top */}
      <ScrollToTop
        smooth
        color='white'
        className='opacity-50 hover:opacity-100 
        bg-[#4B70BE] flex justify-center items-center 
        right-3 bottom-3 rounded-full'
      />

      <Footer />
    </>
  )
}

export default App
