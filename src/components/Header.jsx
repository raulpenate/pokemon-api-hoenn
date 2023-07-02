import { badgesTypes } from '../helper/types'
import PokemonType from './PokemonType'
import logo from '../assets/pokeapi_256.png'

const Header = ({ filterName, filterType, orderPokemons }) => {
  return (
    <div
      style={{
        textShadow: '1px 1px #000',
      }}
      className='bg-[#3B4CCA]/70 border-b-4 
        border-[#3B4CCA] text-white flex 
        flex-col justify-center items-center 
        py-5 mb-8 rounded-b-md'>
      <img
        className='mb-3'
        src={logo}
        alt=''
      />
      <div className='w-full'>
        <div className='flex justify-center mb-3'>
          <input
            className='p-2 text-black rounded-md 
              border-b-4 border-[#3B4CCA] w-full md:w-2/5'
            type='text'
            placeholder='Search pokemon...'
            onChange={(e) => filterName(e.target.value)}
          />
        </div>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='text-sm md:ml-2 w-full sm:w-full md:w-3/5 lg:w-2/5'>
            <p className='text-center md:text-left'>Filter by type:</p>
            <div className='flex flex-row flex-wrap justify-center md:justify-start'>
              {badgesTypes.map(({ nombre, color }, key) => (
                <PokemonType
                  key={key}
                  nombre={nombre}
                  color={color}
                  filterType={filterType}
                />
              ))}
            </div>
          </div>
          <div className='flex items-center justify-center text-sm'>
            <select
              onChange={(e) => orderPokemons(e.target.value)}
              className='bg-[#3761A8] border-2 p-2 px-6 mr-5 rounded-md'>
              <option value='ndexAsc'>NDEX ASC</option>
              <option value='ndexDesc'>NDEX DESC</option>
              <option value='expAsc'>EXP ASC</option>
              <option value='expDesc'>EXP DESC</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
