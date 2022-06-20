import { Header, Wrapper, Info } from 'pages/Home/components/index'

const Home = () => {
  return (
    <Wrapper>
      <>
        <Header />
        <div>
          <div className='flex justify-between  px-4'>
            <div className='w-[886px] h-[857px]  bg-red-200'></div>
            <Info />
          </div>
        </div>
      </>
    </Wrapper>
  )
}

export default Home
