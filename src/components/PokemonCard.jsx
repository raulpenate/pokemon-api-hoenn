import PokemonType from './PokemonType'

const PokemonCard = ({ img, ndex, exp, nombre, tipo }) => {
  return (
    <div
      style={{
        textShadow: '1px 1px #000',
        borderColor: tipo[0].color,
      }}
      className='border-b-2  bg-[#3B4CCA]/70 
      text-slate-200 flex flex-wrap flex-col 
      justify-center items-center shadow-md p-2 rounded-md
      w-[300px] md:w-[250px] lg:w-[260px] xl:w-[260px] 
      h-[300px] md:h-[250px] lg:h-[260px] xl:h-[260px]'>
      <img
        style={{
          borderColor: tipo[0].color,
        }}
        className=' object-cover border-b-2 
        bg-slate-200 rounded-md scale-110 p-2'
        src={img}
        alt=''
      />
      <div className='mt-3 flex justify-between w-1/2'>
        <p className='text-[8px]'>
          <span>#</span>
          {ndex}
        </p>
        <p className='text-[8px]'>
          <span>exp: </span>
          {exp ? exp : '???'}
        </p>
      </div>
      <p
        className={
          nombre.length < 16
            ? 'mt-1 text-[0.7em] capitalize w-full text-center'
            : 'mt-1 text-[0.48em] capitalize w-full text-center'
        }>
        {nombre}
      </p>
      <div className='flex flex-row justify-between'>
        {tipo.map(({ nombre, color }, key) => (
          <PokemonType
            key={key}
            nombre={nombre}
            color={color}
          />
        ))}
      </div>
    </div>
  )
}

export default PokemonCard
