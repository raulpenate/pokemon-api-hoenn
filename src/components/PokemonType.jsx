const PokemonType = ({ nombre, color, filterType }) => {
  return (
    <div
      onClick={filterType ? () => filterType(nombre) : null}
      style={{ backgroundColor: color }}
      className={
        nombre.length < 7
          ? 'hover:cursor-pointer text-white text-center w-[70px] text-[0.4rem] m-1 p-[2px] px-[10px] rounded-full text-black capitalize box-border'
          : 'hover:cursor-pointer text-white text-center w-[85px] text-[0.4rem] m-1 p-[2px] px-[10px] rounded-full text-black capitalize box-border'
      }>
      {nombre}
    </div>
  )
}

export default PokemonType
