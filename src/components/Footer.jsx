const Footer = () => {
  return (
    <div
      style={{
        textShadow: '1px 1px #000',
      }}
      className='flex flex-col justify-center items-center my-10 text-white'>
      <p className='my-2 text-center'>Pokéapi™ developed with React</p>
      <p className='my-2 text-center'>
        by{' '}
        <a
          className='hover:underline'
          href='https://github.com/raulpenate'>
          raulpenate
        </a>
      </p>
    </div>
  )
}

export default Footer
