import react from 'react'
import Searcher from '../components/Searcher'
import Header from '../components/Header'
import Footer from '../components/Footer'
function Home() {

  return <div className='bg-image-2 h-screen'>
    <Header />
    <Searcher clases={"md:my-10"} />
    <Footer />
  </div>
}

export default Home
