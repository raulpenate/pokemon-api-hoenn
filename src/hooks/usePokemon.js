import { useEffect, useState } from 'react'
import { getPokemon } from '../helper/getPokemon'

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [pokemonSaved, setPokemonSaved] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const savePokemon = async () => {
    const newPokemons = await getPokemon()
    setPokemon(newPokemons)
    setPokemonSaved(newPokemons)
    setIsLoading(false)
  }

  const filterType = (type = 'all') => {
    const types =
      type != 'all'
        ? [...pokemonSaved].filter((e) => {
            return e.tipo.length === 1
              ? e.tipo[0].nombre === type
              : e.tipo[0].nombre === type || e.tipo[1].nombre === type
          })
        : [...pokemonSaved]
    setPokemon(types)
  }

  const filterName = (search = '') => {
    const cleanSearch = search.toLowerCase().trim()
    const pkns = [...pokemonSaved].filter(({ nombre }) => {
      return nombre.match(cleanSearch)
    })
    setPokemon(pkns)
  }

  const orderPokemons = (order = 'ndexAsc') => {
    const orders =
      order === 'ndexAsc'
        ? [...pokemonSaved].sort((a, b) => a.ndex - b.ndex)
        : order === 'ndexDesc'
        ? [...pokemonSaved].sort((a, b) => b.ndex - a.ndex)
        : order === 'expAsc'
        ? [...pokemonSaved].sort((a, b) => a.exp - b.exp)
        : order === 'expDesc'
        ? [...pokemonSaved].sort((a, b) => b.exp - a.exp)
        : [...pokemonSaved]
    setPokemon(orders)
  }

  useEffect(() => {
    savePokemon()
  }, [])

  return {
    filterName,
    filterType,
    orderPokemons,
    isLoading,
    pokemon,
  }
}
