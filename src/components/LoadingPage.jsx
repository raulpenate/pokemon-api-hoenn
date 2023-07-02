import pokeball from '../assets/pokeball.png'
const LoadingPage = () => {
  return (
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
  )
}

export default LoadingPage
