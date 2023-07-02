import pokemon from '../api/api'
import { pokemonTypes } from './types'

export const getPokemon = async () => {
  const n = Array.from({ length: 135 }, (_, i) => i + 252)

  const pokemonPromises = n.map(async (e) => {
    const { data } = await pokemon.get(`/${e}`)
    return {
      ndex: e,
      exp: data.base_experience,
      nombre: data.name,
      img: data.sprites.front_default,
      tipo: data.types.map((e) => {
        return {
          nombre: e.type.name,
          color: pokemonTypes[e.type.name],
        }
      }),
    }
  })

  return Promise.all(pokemonPromises)
}
